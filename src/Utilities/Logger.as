package Utilities {
	 
	public class Logger {
		private var logs : Array;
		private var isLineLimited : Boolean;
		private var isLengthLimited : Boolean;
		private var plineLimit : uint;
		private var plengthLimit : uint;
		private var plength : uint;
		private var ptextLength : uint;
		private var pcutOnChar : Boolean;

		public function Logger(lineLimited : Boolean = true, lengthLimited : Boolean = false, lineLimit : uint = 50, lengthLimit : uint = 5000, initText : String = "", cutOnChar : Boolean = false) {
			logs = new Array;
			isLineLimited = lineLimited;
			isLengthLimited = lengthLimited;
			plineLimit = lineLimit;
			plengthLimit = lengthLimit;
			plength = 0;
			ptextLength = 0;
			pcutOnChar = cutOnChar;
			if (initText.length != 0) {
				log(initText);
			}
		}
		
		public function updateParams(lineLimited : Boolean = true, lengthLimited : Boolean = false, lineLimit : uint = 50, lengthLimit : uint = 5000, cutOnChar : Boolean = false):void {
			isLineLimited = lineLimited;
			isLengthLimited = lengthLimited;
			plineLimit = lineLimit;
			plengthLimit = lengthLimit;
			pcutOnChar = cutOnChar;
			update();
		}
		
		public function update() : Boolean { //Returns : all went well
		var temp : String = "";
		var okay : Boolean = true;
		
			if (plineLimit && plength > plineLimit) {
				temp = logs.shift();
				plength--;
				ptextLength -= temp.length;
				
				while(plength > plineLimit) {
					cutFirst();
					okay = false;
				}
			}
			
			else if (plengthLimit && ptextLength > plengthLimit) {
				if (!pcutOnChar) {
					while(ptextLength > plengthLimit) {
						cutFirst();
					}
				}
				
				else {
					while (ptextLength - logs[0].length > plengthLimit) {
						cutFirst();
					}
					temp = logs[0];
					var delta : uint = ptextLength - temp.length;
					logs[0] = temp.substr(delta);
					ptextLength -= delta;
					if (ptextLength != plengthLimit) {
						okay = false;
					}
				}
			}
			return okay;
		}
		
		private function cutFirst():void {
			var temp : String = logs.shift();
			plength--;
			ptextLength -= temp.length;
		}
		
		public function log(text : String):void {
			logs.push(text);
			plength++;
			ptextLength += text.length;
			update();
		}
		
		public function clear():void {
			delete logs;
			logs = new Array;
			plength = 0;
			ptextLength = 0;
		}
		
		public function toString():String {
			var tmp : String = "";
			for each (var i : Number in logs) {
				tmp += logs[i]; 
			}
			return tmp;
		}
		
		public function getLength():uint {
			return logs.length;
		}

		public function getTextLength():uint {
			var tmp : uint = 0;
			for each (var i : Number in logs) {
				tmp += logs[i].length; 
			}
			return tmp;
		}
		
	}
}
