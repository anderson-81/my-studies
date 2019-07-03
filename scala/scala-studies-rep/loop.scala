object Loop{

	def main(args:Array[String])
	{
		var i:Int=0

		println("\nPrint While")
		while(i < 10){
			println(i)
			i = i + 1
		}

		println("\nPrint Do..While")
		do{
			println(i)
			i = i - 1
		}
		while(i > 0)

		println("\nPrint For(to)")
		i = 0
		for(i <- 1 to 10)
		{
			println(i)
		}

		println("\nPrint For(Until)")
		i = 0
		for(i <- 1 until 10)
		{
			println(i)
		}
	}
}