// https://www.npmjs.com/package/nodejs-websocket
// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

var ws = require('nodejs-websocket');
var fs = require('fs');
var util = require('util');
var sys = require('sys');
var mongoose = require('mongoose');
var colors = require('colors');
var tools = require('./tools.js');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

const PACKET_SEPARATOR = '\u1234';
var version = "0.1.2.5";
var maxAcceleration = 3;
var players = {};
var logfile = fs.createWriteStream(__dirname + '/debug.log', {flags : 'a'});
var stdout = process.stdout;
var stdin = process.openStdin();



/* ================================================== DATABASE INITIALIZATION ================================================== */

mongoose.connect('mongodb://localhost/data', function(err) {
        if (err) { throw err; }
        });
mongoose.connection.once('open', main);

var users = new mongoose.Schema({
    nickname : {type : String, match : /^[a-zA-Z0-9-_]{4,20}$/ },
    elo : {type : Number, default : 1000},
    registerDate : {type : Date, default : Date.now},
    password : {type : String, match : /^.{6,}$/},
    email : {type : String, match : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},
    privilegeLevel : {type : Number, min : 0, max : 10}
});

var usersModel = mongoose.model('Users', users);


/* ================================================== CONSOLE I/O ================================================== */

stdin.addListener("data", stdinProcessor);

console.log = function(d, ret) { //Logger
    var end = typeof ret === 'undefined' ? '\n' : ret;
    logfile.write(tools.getFormatedDate() + util.format(d) + end);
    stdout.write(util.format(d) + end);
}

function stdinProcessor(data) {
    data = data.toString().substring(0, data.length-1);
    if (data.length) {
        console.log("[OP] Command issued : [".bold + data.green.bold + "]".bold);
    }
    switch(data.split(" ")[0].toLowerCase()) {
        case "clearlog":
        case "clearlogs":
        case "clrlog":
        case "clrlogs":
            console.log("[OP] Clearing logs");
            logfile.close();
            logfile = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
            break;
        case "exit":
        case "stop":
        case "quit":
        case "halt":
        case "shutdown":
            onQuit();
            break;
        case "regr":
        case "register":
        case "adduser":
        case "newplayer":
        case "newuser":
        case "newplayer":
        case "registeruser":
        case "registerplayer":
            tools.registerUser(data.split(" "), usersModel, players);
            break;
        case "updt":
        case "update":
        case "updateuser":
        case "updateplayer":
            tools.updateUser(data.split(" "), usersModel, players);
            break;
        case "dele":
        case "delete":
        case "deleteuser":
        case "deleteplayer":
            tools.deleteUser(data.split(" "), usersModel, players);
            break;
        case "dump":
        case "dumpdb":
        case "dumpdatabase":
            tools.dump(fs, usersModel, data.split(" ")[1]);
            break;
        case "updateprivileges":
        case "privileges":
        case "op":
        case "promote":
        case "demote":
            tools.updatePrivileges(data.split(" "), usersModel, players);
            break;
        case "":
            break;
        case "help":
        case "?":
        default:
            console.log("CLEARLOGS\nSTOP\nREGISTER [name] [pass] [email]\nUPDATE [mail/user] [newpass] [newmail] (newuser)\nPROMOTE [mail/user] [privilegeLevel]\nDELETE [mail/user] (pass)\nDUMPDB".bold.red);
            break;
    }
}



/* ================================================== EVENTS ================================================== */

function onQuit() { // Server
    //server.close(); // TODO : Remove?
    console.log("Shutting down...".red.bold);
    for (i in players) {
        if (players[i].socket !== undefined) {
            endSocket(players[i].socket);
            console.log("Saved player ".green.italic + i.green.italic);
        }
    }

    mongoose.connection.close();
    process.exit();
}

function endSocket(socket) {
    // Send client sth
    if (socket && socket.isOnline) { // If in game
        players[socket.player].socket = null;
        clearInterval(players[socket.player].updateInterval);
        socket.isOnline = false; // Player logged in
    }
    if (socket) {
        socket.close();
        console.log("Socket ended.");
    }
}

function onConnect(socket) {
    function killSocket(had_error) { // Close client connection on request
        if(had_error) {
            console.log("KILL ".red.bold + had_error);
            endSocket(socket);
        }
    }

    function dataHandler(command) {
        var now = new Date();
        var command3 = command.substring(0, 3);
        var command4 = command.substring(0, 4);
        if (command == "EXIT") {
            console.log("Received exit request from " + socket.socket.address().address + ":" + socket.socket.address().port + " (" + socket.socket.address().family + "). Ending connection...");
            socket.close();
        } else if (command3 == "GET") {
            var i = command.indexOf("Sec-WebSocket-Key: ") + 19;
            var str = "";
            while (command.charAt(i) != "\n") {
                str += command.charAt(i++);
            }
            tools.sendClient(socket, "HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: " + tools.b64encode(tools.sha1(str + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")));
        } else if ((command4 == "KEYD" || command4 == "KEYU") && socket.isOnline) {
            currentPlayer = players[socket.player];
            currentPlayer.keysPressed = tools.updateKeys(currentPlayer, command.split(" ")[1], (command[3] == "D"));
            if (currentPlayer.keysPressed.Right) {
                currentPlayer.pxacceleration += 0.2;
            }
            if (currentPlayer.keysPressed.Left) {
                currentPlayer.pxacceleration -= 0.2;
            }
            if (currentPlayer.keysPressed.Down) {
                currentPlayer.pyacceleration += 0.2;
            }
            if (currentPlayer.keysPressed.Up) {
                currentPlayer.pyacceleration -= 0.2;
            }
            currentPlayer.pxacceleration = Math.min(currentPlayer.pxacceleration, maxAcceleration);
            currentPlayer.pyacceleration = Math.min(currentPlayer.pyacceleration, maxAcceleration);

            //console.log(currentPlayer.pxacceleration + "___" + currentPlayer.pyacceleration);
        } else if (command4 == "LOGN") {
            if (command.split(" ").length != 3) {
                console.log("Wrong login syntax!".bold.red);
                tools.sendClient(socket, "SYNT");
            } else {
                var nick = command.split(" ")[1];
                var pass = command.split(" ")[2];
                var query = usersModel.find({$or : [{nickname: nick}, {email: nick}]});
                query.where({password : pass});
                query.exec(function (err, data) {
                    if (err) { throw err; }
                    if (data.length) {
                        console.log("User logged in".green);
                        tools.sendClient(socket, "SUCC");
                        console.log("TOOLS.INIT");
                        players = tools.init(players, nick, socket, data);
                    } else {
                        console.log("Wrong credentials!".red);
                        tools.sendClient(socket, "CRED");
                    }
                });
            }
        } else if (command4 == "REGR") {
            tools.registerUser(command.split(" "), usersModel, players, socket);
        } else if (command4 == "UPDT" && socket.isOnline) {
            tools.updateUser(command.split(" "), usersModel, players, socket);
        } else if (command4 == "DELE" && socket.isOnline) {
            tools.deleteUser(command.split(" "), usersModel, players, socket);
        } else if (command4 == "LOGT" && socket.isOnline) {
            // TODO : Save player data?
            tools.sendClient(socket, "SUCL");
            endSocket(socket);
            delete players[socket.player];
            socket.isOnline = false;
        } else {
            if (socket.isOnline) {
                console.log("Got [" + command.red + "] at " + now.getSeconds() + "." + now.getMilliseconds() + " from " + socket.socket.address().address + ":" + socket.socket.address().port + " (" + socket.socket.address().family + ")");
                tools.sendClient(socket, "SYNT");
            } else {
                tools.sendClient(socket, "OFLN");
            }
        }
    }

    function onData(d) {
        var command = decoder.write(d).split(PACKET_SEPARATOR);
        for (i in command) {
            dataHandler(command[i].replace(String.fromCharCode(13), "").replace(String.fromCharCode(10), ""));
        }
    }

    console.log("Connected to client");
    socket.isOnline = false; //Init
    socket.on("text", onData);
    socket.on("error", killSocket); //To improve...
    socket.on("close", killSocket);
    // binary, connect, pong
}

var server = ws.createServer(onConnect);

logfile.write('\n\n=== NEW INSTANCE ===\n\n');
console.log("ColorMadness server version ".bold.blue + version.magenta.italic);
console.log("Ready. Waiting for incoming connections".magenta);

function main() {
    server.listen(9001, "0.0.0.0");
    server.listen(80, "0.0.0.0"); //TODO : Remove?
    process.on('SIGINT', onQuit);
}

module.exports.endSocket = endSocket;

// [GET] EXST LOGN LOGT REGR UPDT DELE CRED SYNT UPOK UPFL DELK DELF SUCC SUCR SUCL OFLN + update socket.isOnline
// Gestion SIGKILL
