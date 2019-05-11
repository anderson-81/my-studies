class Point(val _x: Int, val _y: Int) {
	var x : Int = _x;
	var y : Int = _y;
}

object App{
	def main(args: Array[String]){
		val point = new Point(7,3)
		show

		def show(){
			println(s"X: ${point.x} - Y: ${point.y}" )
		}
	}
}