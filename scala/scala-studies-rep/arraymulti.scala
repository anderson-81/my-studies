object ArrayMulti{

	def main(args:Array[String]){

		var matrix = Array.ofDim[Int](2,3,4)
		
		for(x <- 0 to 1)
		{
			for(y <- 0 to 2)
			{
				for(z <- 0 to 3)
				{
					matrix(x)(y)(z) = (x * y * z) + 3
				}
			}
		}

		for(x <- 0 to 1)
		{
			for(y <- 0 to 2)
			{
				for(z <- 0 to 3)
				{
					println("[" + (x+1) + "][" + (y+1) + "][" + (z+1) + "] = " + matrix(x)(y)(z))
				}
			}
		}
	}
}