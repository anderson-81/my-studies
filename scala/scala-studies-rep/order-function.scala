object Object {

	def perform(f:(Int,Int,Int) => Int)
	{
		println(f(7,2,21))
	}

	def main(args:Array[String])
	{
		perform((x:Int,y:Int,z:Int) => ((x*y)+z))
	}
}