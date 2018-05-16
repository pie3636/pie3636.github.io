package Application {
	import flash.utils.clearTimeout;
	import flash.display.Stage;
	import flash.net.Socket;
	import flash.text.TextField;
	import flash.events.Event;
	import flash.events.IOErrorEvent;
	import flash.events.ProgressEvent;
	import flash.events.KeyboardEvent;
	import flash.events.EventDispatcher;
	import flash.utils.setTimeout;

	public class NetworkHandler extends EventDispatcher {
		var pstage : Stage;
		var psocket : Socket;
		var pdebug : TextField;
		var pisConnected : Boolean; //TODO : Find use for this
		var pplayer : Player;
		var ptimeout : uint;
		var ptimeoutDuration : Number;
		
		public function NetworkHandler(myStage:Stage, myDebug:TextField, timeout:Number = 5000) {
			pstage = myStage;
			pdebug = myDebug;
			pisConnected = false;
			pplayer = new Player;
			ptimeoutDuration = timeout;
		}
		
		public function setPlayer(player : Player):void {
			pplayer = player;
		}
		
		public function doConnect(IP:TextField, Port:TextField):Function { 
			return function(e : Event):void {
				psocket = new Socket(IP.text, int(Port.text)); //TODO : DNS instead
		        // socket = new Socket("colormadness.ovh", 80);
				psocket.addEventListener(Event.CONNECT, onConnect);
				psocket.addEventListener(Event.CLOSE, onSocketClose);
				psocket.addEventListener(IOErrorEvent.IO_ERROR, onError);
				ptimeout = setTimeout(onTimeout, ptimeoutDuration);
			};
	    }
		
		public function doLogin(nickname:TextField, password:TextField):Function {
			return function(e : Event):void {
				if (pisConnected) {
					serverSend("LOGN " + nickname.text + " " + password.text, true);
					psocket.addEventListener(ProgressEvent.SOCKET_DATA, onData);
				} else {
					dispatchEvent(new Event("login_while_disconnected"));
				}
			};
	    }
		
		public function doLogout(e:Event = null):void {
			serverSend("LOGT", true);
		}
		
		public function serverSend(str:String, timeout:Boolean = false):void {
			psocket.writeUTFBytes(str + ";");
			psocket.flush();
			pdebug.text += "Sent [" + str + "];\n";
			if (timeout) {
				ptimeout = setTimeout(onTimeout, ptimeoutDuration);
			}
		}
		
	    public function onConnect(evt:Event):void {
			clearTimeout(ptimeout);
			psocket.removeEventListener(Event.CONNECT, onConnect);
	        psocket.removeEventListener(IOErrorEvent.IO_ERROR, onError);
			pisConnected = true;
			dispatchEvent(new Event("connection_opened"));
	    }
		
		public function onTimeout():void { //TODO : Better management
			onError(new IOErrorEvent("INITIAL_CONNECTION_TIMEOUT"));
	    }
		
	    public function onError(evt:IOErrorEvent):void { //TODO : Better management
	  		pdebug.text += "Error caught! [" + evt.type + "]\n";
			clearTimeout(ptimeout);
	        psocket.removeEventListener(Event.CONNECT, onConnect);
			psocket.removeEventListener(Event.CLOSE, onSocketClose);
	        psocket.removeEventListener(IOErrorEvent.IO_ERROR, onError);
			dispatchEvent(new Event("connection_error"));
			onSocketClose();
	    }
		
		public function bind():void {
	        pstage.addEventListener(KeyboardEvent.KEY_DOWN, onDown);
			pstage.addEventListener(KeyboardEvent.KEY_UP, onUp);
			psocket.addEventListener(ProgressEvent.SOCKET_DATA, onData);
			pdebug.text += "All listeners added.\n";
		}
		
		public function unbind():void {
	        psocket.removeEventListener(ProgressEvent.SOCKET_DATA, onData);
			pstage.removeEventListener(KeyboardEvent.KEY_UP, onUp);
			pstage.removeEventListener(KeyboardEvent.KEY_DOWN, onDown);
			pdebug.text += "Connection closed.\n";
		}

		public function onData(evt:ProgressEvent):void {
			clearTimeout(ptimeout); //TODO : Improve?
			var data:String = psocket.readUTFBytes(psocket.bytesAvailable);
			var command : String = ""; //See server
			var imin : Number = 0;
			for (var i:Number = imin; i <= data.length - 1; i++) {
				command += data.charAt(i);
				if (data.charAt(i) == ";" || i == data.length - 1) {
				    dataHandler(command);
					command = "";
				}
			}
	    }
		
		public function dataHandler(data:String):void {
			var cmd:String = data.split(";")[0];
			pdebug.text += "Received :" + data + "\n";
			switch(cmd.split(" ")[0]) {
				case "SPOS":
					var x : Number = cmd.split(" ")[1];
					var y : Number = cmd.split(" ")[2];
					pplayer.move(x, y);
					break;
				case "SYNT":
					dispatchEvent(new Event("wrong_client_syntax"));
					break;
				case "CRED":
					dispatchEvent(new Event ("wrong_credentials"));
					break;
				case "SUCC":
					dispatchEvent(new Event ("logged_in"));
					break;
				case "SUCL":
					psocket.removeEventListener(ProgressEvent.SOCKET_DATA, onData);
					dispatchEvent(new Event ("disconnected"));
					break;
			}
		}
		
		public function doDisconnect(e : Event = null):void {
			serverSend("EXIT");
			psocket.close();
			onSocketClose();
		}
	    
	    public function onSocketClose(evt:Event = null):void { //TODO : Better management
			pisConnected = false;
			dispatchEvent(new Event("connection_closed"));
	    }
		
		public function onDown(e:KeyboardEvent):void {
			serverSend("KEYD " + e.keyCode);
		}
		public function onUp(e:KeyboardEvent):void {
			serverSend("KEYU " + e.keyCode);
        }
	}
}
