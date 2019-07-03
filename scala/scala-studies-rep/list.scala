object Object
{
	def main(args:Array[String])
	{
		var list = List(1981,11,12,35,10,30)
		
		//Print by index
		println(list(2))

		//Print 01
		for(item <- list){
			println(item)
		}

		//Print 02
		list.foreach{
			println(_)
		}
	}
}