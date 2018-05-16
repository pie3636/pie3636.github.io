    var net = require('net');
    const PACKET_SEPARATOR = 59 // ;
    var connection_ack = false;
    var counter = 0;
    
    var server = net.createServer(function(socket) {
        function onConnect() {
            console.log("Connected to Flash");
        }
    
        function dataHandler(command) {
            if (command[command.length - 1] != String.fromCharCode(PACKET_SEPARATOR) && connection_ack) {
           console.log("SEP : " + PACKET_SEPARATOR + " - last : " + command[command.length - 1] + " - ack " + connection_ack);
                console.log("CAUGHT EXCEPTION : WRONG PACKET FORMAT --- " + command + " --- " + command.length);
            }
            if (command == "exit;") {
                console.log("Received exit request from " + socket.address().address + ":" + socket.address().port + " (" + socket.address().family + "). Ending connection...");
                socket.end();
            }
            else if (command == "<policy-file-request/>\0") {
                socket.write('<cross-domain-policy>\n<allow-access-from domain="*" to-ports="*" />\n</cross-domain-policy>\0', 'utf8');
                console.log("Policy file sent to " + socket.address().address + ":" + socket.address().port);
                player1.pxacceleration = 0;
                player1.pyacceleration = 0;
                connection_ack = true;
            }
            else {
                console.log("Got data from " + socket.address().address + ":" + socket.address().port + " (" + socket.address().family + ")");
                console.log("--> " + command);
                counter++;
                socket.write("Received " + counter + " commands;", 'utf8');
                console.log("Sending : Received " + counter + " commands;");
            }
        }
    
        function onData(d) {
            var command = "";
            for (i=0; i <= d.length - 1; i++) {
                command += String.fromCharCode(d[i]);
                if (d[i] == PACKET_SEPARATOR || i == d.length - 1 && !connection_ack) {
                    dataHandler(command);
                    command = "";
                }
            }
        }
    
        socket.on("connect", onConnect);
        socket.on("data", onData);
    });
    
    console.log("Ready. Waiting for incoming connections");
    server.listen(9001);
    server.listen(80); //TODO : Remove?     
