package Application {
	import Application.Ball;
	import flash.display.Stage;
	import flash.display.DisplayObject;
	
	public class Player {
		var pball : Ball;
		var pcolor : uint;
		var pxacceleration : Number;
		var pyacceleration : Number;
		var pdisplay : DisplayObject;
		var pstage : Stage;
		var pid : String;
		public function Player(myStage:Stage = null, color0:uint = 0xffffff, x0:Number = 0, y0:Number = 0, id:String = "") {
			pball = new Ball(color0, this, x0, y0);
			pxacceleration = 0;
			pyacceleration = 0;
			pstage = myStage;
			pid = id;
		}
		public function move(x0:Number=0, y0:Number=0):void {
			//TODO : Check that player exists and is in game
			pball.move(x0, y0);
			pdisplay.x = x0;
			pdisplay.y = y0;
		}
		public function draw():void {
			pdisplay = pstage.addChild(pball.draw());
		}
	}
}