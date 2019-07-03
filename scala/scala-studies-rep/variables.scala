class Variables{
	var number:Int = 35
	var name:String = "Anderson"
	var floatNumber:Double = 3652.43
	var letter:Char = 'A'

	def PrintValues() = {
		println (number)
		println (name)
		println (floatNumber)
		println (letter)	
	}
}

object Test{
	def main(args:Array[String])
	{
		var obj = new Variables
		obj.PrintValues()
	}
}


