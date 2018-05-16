var net = require('net');
var fs = require('fs');
var util = require('util');
var sys = require('sys');
var mongoose = require('mongoose');
var colors = require('colors');
var tools = require('./tools2.js');

const PACKET_SEPARATOR = 59 // ;
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
    elo : {type : Number, degault : 1000},
    registerDate : {type : Date, default : Date.now},
    password : {type : String, match : /^.{6,}$/},
    email : {type : String, match : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
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
            tools.registerUser(data.split(" "), usersModel);
            break;
        case "updt":
        case "update":
        case "updateuser":
        case "updateplayer":
            tools.updateUser(data.split(" "), usersModel);
            break;
        case "dele":
        case "delete":
        case "deleteuser":
        case "deleteplayer":
            tools.deleteUser(data.split(" "), usersModel);
            break;
        case "dump":
        case "dumpdb":
        case "dumpdatabase":
            tools.dump(usersModel);
            break;
        case "":
            break;
        case "help":
        case "?":
        default:
            console.log("CLEARLOGS\nSTOP\nREGISTER [name] [pass] [email]\nUPDATE [mail/user] [newpass] [newmail] (newuser)\nDELETE [mail/user] (pass)\nDUMPDB".bold.red);
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
    if (socket.isOnline) { // If in game
        players[socket.player].socket = null;
        clearInterval(players[socket.player].updateInterval);
        socket.isOnline = false; // Player logged in
    }
    socket.end();
    console.log("Socket ended.");
}
    
function onConnect(socket) {
    function killSocket(had_error) { // Close client connection on request
        console.log("KILL".red.bold);
        if(had_error) {
            console.log("had_error " + had_error);
            endSocket(socket);
        }
    }
    
    console.log("Connected to Flash");
    function dataHandler(command) {
        cmd = command.split(";")[0];
        if (command[command.length - 1] != String.fromCharCode(PACKET_SEPARATOR) && command != command == "<policy-file-request/>\0") {
            console.log("SEPARATOR : [" + PACKET_SEPARATOR + "], last : [" + command[command.length - 1] + "]");
            console.log("CAUGHT EXCEPTION : WRONG PACKET FORMAT : [" + command + "] LENGTH [" + command.length + "]");
            //throw error
        }
        if (cmd == "EXIT") {
            console.log("Received exit request from " + socket.address().address + ":" + socket.address().port + " (" + socket.address().family + "). Ending connection...");
        socket.end();
        }
        else if (command == "<policy-file-request/>\0") {
            socket.write('<cross-domain-policy>\n<allow-access-from domain="*" to-ports="*" />\n</cross-domain-policy>\0', 'utf8');
            console.log("Policy file sent to " + socket.address().address + ":" + socket.address().port + " (" + socket.address().family + ").");
        }
        else {
            command = command.split(";")[0];
            var now = new Date();
            if ((command.substring(0, 4) == "KEYD" || command.substring(0, 4) == "KEYU") && socket.isOnline) {
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
            }
            else if (command.substring(0, 4) == "LOGN") {
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
                            players = tools.init(players, nick, socket);
                        }
                        else {
                            console.log("Wrong credentials!".red);
                            tools.sendClient(socket, "CRED");
                        }
                    });
                }
            }
            else if (command.substring(0, 4) == "REGR") {
                tools.registerUser(command.split(" "), usersModel, socket);
            }
            else if (command.substring(0, 4) == "UPDT" && socket.isOnline) {
                tools.updateUser(command.split(" "), usersModel, socket);
            }
            else if (command.substring(0, 4) == "DELE" && socket.isOnline) {
                tools.deleteUser(command.split(" "), usersModel, socket);
            }
            else if (command.substring(0, 4) == "LOGT" && socket.isOnline) {
                // TODO : Save player data?
                tools.sendClient(socket, "SUCL");
                endSocket(socket);
                delete players[socket.player];
                socket.isOnline = false;
            }   
            else {
                console.log("Got [" + command.red + "] at " + now.getSeconds() + "." + now.getMilliseconds() + " from " + socket.address().address + ":" + socket.address().port + " (" + socket.address().family + ")");
                tools.sendClient(socket, "SYNT");
            }
        }
    }

    function onData(d) {
        var command = "";
        //var imin = (d[0] == 0 ? 2 : 0);
        var imin = 0; // 2 premiers octets = longueur pour WriteUTF
        for (i=imin; i <= d.length - 1; i++) {
            command += String.fromCharCode(d[i]);
            if (d[i] == PACKET_SEPARATOR || i == d.length - 1 && command == "<policy-file-request/>\0") {
                dataHandler(command);
                command = "";
            }
        }
    }
    
    socket.isOnline = false; //Init
    socket.on("data", onData);
    socket.on("error", killSocket); //To improve...
    socket.on("close", killSocket);
}

var server = net.createServer(onConnect);

logfile.write('\n\n=== NEW INSTANCE ===\n\n');
console.log("ColorMadness server version ".bold.blue + "0.2.1.4".magenta.italic);
console.log("Ready. Waiting for incoming connections".magenta);

function main() {
    server.listen(9001, "0.0.0.0");
    server.listen(80, "0.0.0.0"); //TODO : Remove?
    process.on('SIGINT', onQuit);
}

// EXST LOGN LOGT REGR UPDT DELE CRED SYNT UPOK UPFL DELK DELF SUCC SUCR SUCL + add envoi direct depuis client et update socket.isOnline
