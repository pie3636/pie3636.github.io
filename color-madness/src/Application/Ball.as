package Application {
	import Application.Player;
	import flash.display.Sprite;
	
	public class Ball {
	var x:Number;
		var y:Number;
		var pColor : uint;
		var pParent : Player;
		var pCircle : Sprite;
		
		public function Ball(color0:uint, parentPlayer:Player = null, x0:Number = 0, y0:Number = 0) {
			x = x0;
			y = y0;
			pColor = color0;
			pParent = parentPlayer;
			pCircle = new Sprite();
		}
		public function move(x0:Number=0, y0:Number=0):void {
			x = x0;
			y = y0;
		}
		public function setColor(color0:uint = 0xffffff):void {
			pColor = color0;
		}
		public function draw():Sprite {
			pCircle.graphics.beginFill(pColor);
			pCircle.graphics.drawCircle(x, y, 10);
			pCircle.graphics.endFill();
			return pCircle;
		}
		
	}
}