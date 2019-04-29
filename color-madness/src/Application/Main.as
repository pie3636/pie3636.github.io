//TODO : favicon
//TODO : button, design
//TODO : Testers
//TODO : JS counter
//TODO : Improve network comm (escaping : add length)
//TODO : Diffie-Hellman
//TODO : Limit debug to N lines (Logger!)

package Application {
	import flash.display.Sprite;
	import Application.Player;
	import flash.events.Event;
	import flash.display.StageScaleMode;
	import flash.display.StageAlign;
	import flash.text.TextField;
	import flash.text.TextFormat;
	import flash.utils.setInterval;
	import fl.controls.Button;
	import flash.events.MouseEvent;

	public class Main extends Sprite {
 		
		var debugMode : Boolean;
		
		var serverConnectScreen:Sprite;
		var SC_IPField:TextField;
		var SC_PortField:TextField;
		var SC_connectButton:Button;
		
		var userLoginScreen:Sprite;
		var UL_nickField:TextField;
		var UL_passField:TextField;
		var UL_loginButton:Button;
		var UL_backToSCButton:Button;
		
		var mainMenuScreen:Sprite;
		var MM_disconnectButton:Button;
		
		var debug:TextField;
		var whiteText:TextFormat;
		var redText:TextFormat;
		var network:NetworkHandler;
		
		var doLogin:Function;
		var doConnect:Function;
		
		public function Main() {
			debugMode = true;
			
			
			stage.scaleMode = StageScaleMode.NO_SCALE; //Remove margins
			stage.align = StageAlign.TOP_LEFT;
			
			whiteText = new TextFormat('Arial', 14, 0xFFFFFF);
			redText = new TextFormat('Arial', 14, 0xFF0000, true, false, true);
			
			// [SC] Select server, connect to it. TODO : Server selection
			serverConnectScreen = new Sprite;
			// Server IP
			SC_IPField = new TextField();
			formatText(SC_IPField, 700, 50, 200, 25, "input", "Enter server IP");
			serverConnectScreen.addChild(SC_IPField);
			// Connection Port
			SC_PortField = new TextField();
			formatText(SC_PortField, 700, 100, 50, 25, "input", "Port");
			serverConnectScreen.addChild(SC_PortField);
			// Connect
			SC_connectButton = new Button();
			formatButton(SC_connectButton, 700, 300, 70, 25, 0x000000, redText, "Connect");
			serverConnectScreen.addChild(SC_connectButton);
			
			
			// [UL] Type usersname, password, and log in. TODO : Register, intro, etc.
			userLoginScreen = new Sprite;
			// Username
			UL_nickField = new TextField();
			UL_nickField.defaultTextFormat = whiteText;
			formatText(UL_nickField, 400, 50, 200, 25, "input", "Username");
			userLoginScreen.addChild(UL_nickField);
			// Password
			UL_passField = new TextField();
			UL_passField.defaultTextFormat = whiteText;
			formatText(UL_passField, 400, 100, 200, 25, "input", "Password");
			UL_passField.displayAsPassword = true;
			userLoginScreen.addChild(UL_passField);
			// Log in
			UL_loginButton = new Button();
			formatButton(UL_loginButton, 400, 300, 70, 25, 0x000000, redText, "Login");
			userLoginScreen.addChild(UL_loginButton);
			// Back
			UL_backToSCButton = new Button();
			formatButton(UL_backToSCButton, 400, 400, 200, 25, 0x000000, redText, "Back to server selection");
			userLoginScreen.addChild(UL_backToSCButton);
			
			
			// [MM] Choose action : play, scores, profile, etc. TODO : Everything
			mainMenuScreen = new Sprite;
			// Disconnect
			MM_disconnectButton = new Button();
			formatButton(MM_disconnectButton, 400, 300, 200, 25, 0x000000, redText, "Disconnect");
			mainMenuScreen.addChild(MM_disconnectButton);
			
			if (debugMode) {
				SC_IPField.text = "52.4.7.123";
				SC_PortField.text = "80";
				UL_nickField.text = "Anfasa";
				UL_passField.text = "monSuperMdp";
			}
			
			debug = new TextField();
			debug.defaultTextFormat = whiteText;
			formatText(debug, 100, 0, 200, 500);			
			
			//IPField.textField.border = true;
			
			addChild(debug);
			network = new NetworkHandler(this.stage, debug, (debugMode ? 5000 : 5000));
			doConnect = network.doConnect(SC_IPField, SC_PortField);
			doLogin = network.doLogin(UL_nickField, UL_passField);
			
			stage.focus = SC_IPField;

			setInterval(function():void { //TODO : Switch to Logger.as
				if (debug.text.length >= 500) {
					debug.text = debug.text.substring(debug.text.length - 500);
				}
			}, 100);
			
			addSC();
			
			var player1:Player = new Player(this.stage, 0x22ff22, 200, 200);
			network.setPlayer(player1);
			player1.draw();	

			stage.addEventListener(Event.RESIZE, resizeHandler);
			function resizeHandler(event:Event):void {
			  // center stuff
			}
		}
		
		private function addSC():void {
			network.addEventListener("connection_opened", s_SC_UL);
			network.addEventListener("connection_error", SC_ConnectionError); //TODO : Modifier...
			SC_connectButton.addEventListener(MouseEvent.CLICK, doConnect);
			
			serverConnectScreen.addChild(debug);
			addChild(serverConnectScreen);
		}
		
		private function removeSC():void { // TODO : check IP
			removeChild(serverConnectScreen);
			serverConnectScreen.removeChild(debug);
			
			SC_connectButton.removeEventListener(MouseEvent.CLICK, doConnect);
			network.removeEventListener("connection_error", SC_ConnectionError);
			network.removeEventListener("connection_opened", s_SC_UL);
		}
		
		private function addUL():void {
			network.addEventListener("connection_error", UL_ConnectionError);
			network.addEventListener("wrong_client_syntax", syntaxError);
			network.addEventListener("wrong_credentials", credentialsError);
			network.addEventListener("connection_closed", s_UL_SC);
			network.addEventListener("logged_in", s_UL_MM);
			
			UL_loginButton.addEventListener(MouseEvent.CLICK, doLogin);
			UL_backToSCButton.addEventListener(MouseEvent.CLICK, network.doDisconnect);
			userLoginScreen.addChild(debug);
			addChild(userLoginScreen);
		}
		
		private function removeUL():void {
			removeChild(userLoginScreen);
			userLoginScreen.removeChild(debug);
			UL_backToSCButton.removeEventListener(MouseEvent.CLICK, network.doDisconnect);
			UL_loginButton.removeEventListener(MouseEvent.CLICK, doLogin);
			
			network.removeEventListener("logged_in", s_UL_MM);
			network.removeEventListener("connection_closed", s_UL_SC);
			network.removeEventListener("wrong_credentials", credentialsError);
			network.removeEventListener("wrong_client_syntax", syntaxError);
			network.removeEventListener("connection_error", UL_ConnectionError);
		}
		
		private function addMM():void {
			network.addEventListener("connection_error", MM_ConnectionError);
			network.addEventListener("connection_closed", MM_ConnectionError);
			network.addEventListener("disconnected", s_MM_SC);

			MM_disconnectButton.addEventListener(MouseEvent.CLICK, network.doLogout); //TODO : Confirmation
			mainMenuScreen.addChild(debug);
			addChild(mainMenuScreen);
			
			network.bind();
		}
		
		private function removeMM():void {
			network.unbind();
			
			removeChild(mainMenuScreen);
			mainMenuScreen.removeChild(debug);
			MM_disconnectButton.removeEventListener(MouseEvent.CLICK, network.doLogout); //TODO : Confirmation
			
			network.removeEventListener("disconnected", s_MM_SC);
			network.removeEventListener("connection_closed", MM_ConnectionError);
			network.removeEventListener("connection_error", MM_ConnectionError);
		}

		private function s_SC_UL(e:Event = null):void { removeSC(); addUL(); }
		private function s_UL_SC(e:Event = null):void { removeUL(); addSC(); }
		private function s_UL_MM(e:Event = null):void { removeUL(); addMM(); }
		private function s_MM_SC(e:Event = null):void { removeMM(); addSC(); }
		
		private function SC_ConnectionError(e:Event):void {
			debug.text += "Can't connect to the server!\n"; //TODO : Improve
		}
		
		private function UL_ConnectionError(e:Event):void {
			debug.text += "Lost connection to the server!\n"; //TODO : Improve
			s_UL_SC();
		}
		
		private function MM_ConnectionError(e:Event):void {
			debug.text += "Lost connection to the server!\n"; //TODO : Improve
			s_MM_SC();
		}
		
		private function syntaxError(e:Event):void {
			debug.text += "Caught syntax error!\n"; //TODO : Improve
		}
		
		private function credentialsError(e:Event):void {
			debug.text += "Wrong credentials!\n"; //TODO : Improve
		}
		
		private function formatText(box:TextField, x:int, y:int, w:int, h:int, type:String = "dynamic", text:String = ""):void {
			box.x = x;
			box.y = y;
			box.width = w;
			box.height = h;
			box.opaqueBackground = 0x000000;
			box.defaultTextFormat = whiteText;
			box.type = type;
			box.text = text;
		}
		
		private function formatButton(button:Button, x:int, y:int, w:int, h:int, bg:Number, format:TextFormat, label:String):void {
			button.move(x, y);
			button.textField.width = w;
			button.textField.height = h;
			button.textField.opaqueBackground = bg;
			button.textField.defaultTextFormat = format;
			button.label = label;
		}
	}
}