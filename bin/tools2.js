function beautify3(sec) {
    if (sec < 10) {
        return "00" + sec;
    }
    else if (sec <100) {
        return "0" + sec;
    }
    else {
        return sec;
    }
}

function getFormatedDate() {
    var now = new Date();
    return "[" + now.getDate() + "/" + (now.getMonth() + 1) + "/" + (now.getYear() + 1900) + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds() + "." + beautify3(now.getMilliseconds()) + "] ";
}

function updateKeys(player, keycode, value) {
    switch(keycode.split(";")[0]) {
        case '37':
            player.keysPressed.Left = value;
            break;
        case '38':
            player.keysPressed.Up = value;
            break;
        case '39':
            player.keysPressed.Right = value;
            break;
        case '40':
            player.keysPressed.Down = value;
            break;
        default:
            console.log("Undefined key : " + keycode.split(";")[0]);
            break;
    }
    return player.keysPressed;
}

function sendClient(socket, command) {
    socket.write(command + ";", 'utf8');
}

function update(player) {
    console.log("up".magenta.bold, "");
    if (player.socket != null) {
        player.pxacceleration *= 0.98;
        player.pyacceleration *= 0.98;
        player.x += player.pxacceleration;
        player.y += player.pyacceleration;
        sendClient(player.socket, "SPOS " + player.x + " " + player.y);
    }
    return player;
}

function init(players, nick, socket) {
    players[nick] = {
        keysPressed : {Left : false, Up : false, Right : false, Down : false },
        socket : socket,
        pxacceleration : 0,
        pyacceleration : 0,
        x : 200,
        y : 200,
        updateInterval : setInterval(function(){
            players[nick] = update(players[nick]);
        }, 500)
    };

    players[nick].socket = socket;
    socket.player = nick;
    socket.isOnline = true;
    return players;
}

function logThrow(isOp, stringOp, stringClient, errClient, socket, isConcat) {
    isConcat = (typeof isConcat === undefined ? false : isConcat);
    if (isOp && stringOp.length) {
        console.log(stringOp + (isConcat ? stringClient : ""));
    } else if (!isOp) {
        if (stringClient.length) {
            console.log(stringClient);
        }
        if (errClient.length) {
            sendClient(socket, errClient);
        }
    }
}

function registerUser(data, usersModel, socket) {
    var isOp = (typeof socket === 'undefined');
    if (data.length != 4) {
        logThrow(isOp, "REGISTER [user] [pass] [email]".bold.red, "Wrong registering syntax!".bold.red, "SYNT", socket);
    }
    else {
        var nick = data[1];
        var pass = data[2];
        var mail = data[3];
        var query = usersModel.find({$or : [{nickname: nick}, {email: mail}]});
        query.exec(function (err, data) {
            if (err) { throw err; }
            var disp;
            if (data.length) {
                logThrow(isOp, "[OP] ".red, "Tried to override existing user".red, "EXST", socket, true);
            }
            else {
                var myUser = new usersModel({ nickname : nick, email : mail, password : pass });
                myUser.elo = 1000;
                myUser.save(function (err) {
                    if (err) {
                        console.log("ValidationError".bold.red + "\n" + err	);
                    }
                    else {
                        logThrow(isOp, "[OP] ".green, "New user registered".green, "SUCR", socket, true);
                        if (!isOp) {
                            players = init(players, nick, socket);
                        }
                    }
                });
            }
        });
    }
}

function updateUser(data, usersModel, socket) {
    var isOp = (typeof socket === 'undefined');
    if (data.length != 4 && (!isOp || data.length != 5)) {
        logThrow(isOp, "UPDATE [user/mail] [newpass] [newemail] (newuser)".bold.red, "Wrong update syntax!".bold.red, "SYNT", socket);
    }
    else {
        var nickOrMail = data[1];
        var query = usersModel.find({$or : [{nickname: nickOrMail}, {email: nickOrMail}]});
        query.exec(function (err, results) {
            if (err) { throw err; }
            if (results.length) {
                var newpass = (data[2].length != 1 ? data[2] : results[0].password);
                var newmail = (data[3].length != 1 ? data[3] : results[0].email);
                var newnick = (data.length == 5 && isOp && data[4].length != 1 ? data[4] : results[0].nickname); //Changeable uniquement par OP
                usersModel.update({nickname : results[0].nickname}, {password : newpass, email : newmail, nickname : newnick}, {multi : false}, function (err) {
                    if(err) {
                        throw err; // improve
                    }
                });
                logThrow(isOp, "[OP] ".green, "Updated user".green, "UPOK", socket, true);
            }
            else {
                logThrow(isOp, "[OP] Non-existing user".red.bold, "User not found... Wtf?".red.bold.italic.underline, "UPFL", socket);
                if (!isOp) {
                    players = init(players, nick, socket);
                }
            }
        });
    }
}

function deleteUser(data, usersModel, socket) {
    var isOp = (typeof socket === 'undefined');
    if (data.length != 3 && (!isOp || data.length != 2)) {
        logThrow(isOp, "DELETE [user/mail] (pass)".bold.red, "Wrong delete syntax!".bold.red, "SYNT", socket);
    }
    else {
        var nickOrMail = data[1];
        var query = usersModel.find({$or : [{nickname: nickOrMail}, {email: nickOrMail}]});
        query.exec(function (err, results) {
            if (err) { throw err; }
            if (results.length) {
                var pass = results[0].password;
                var nick = results[0].nickname;
                if (isOp || data.length == 3 && data[2] == pass) {
                    usersModel.remove({nickname : nick}, function (err) {
                        if(err) {
                            throw err; // improve
                        }
                    });
                }
                logThrow(isOp, "[OP] ".green, "Deleted user".green, "DELK", socket, true);
                if (typeof socket !== 'undefined') {
                    socket.isOnline = false;
                }
            }
            else {
                logThrow(isOp, "[OP] ".red.bold.italic.underline, "Delete request failed (password?)".red.bold.italic.underline, "DELF", socket, true);
                if (!isOp) {
                    players = init(players, nick, socket);
                }
            }
        });
    }
}
                
function dump(collection) {
    var query = collection.find();
    query.exec(function (err, results) {
        if (err) { throw err; }
        for (var i = 0; i < results.length; i++) {
            console.log("===========================".red);
            console.log("nick : ".cyan.bold + results[i].nickname.cyan);
            console.log("pass : ".cyan.bold + results[i].password.cyan);
            console.log("mail : ".cyan.bold + results[i].email.cyan);
        }
        console.log("======END OF DATABASE======".red);
    });
}

module.exports.beautify3 = beautify3;
module.exports.getFormatedDate = getFormatedDate;
module.exports.updateKeys = updateKeys;
module.exports.sendClient = sendClient;
module.exports.update = update;
module.exports.init = init;
module.exports.registerUser = registerUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.dump = dump;
