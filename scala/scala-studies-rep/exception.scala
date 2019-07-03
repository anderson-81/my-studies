object Object{

	def main(args:Array[String]){
		var val1:Int = 35
		var val2:Int = 0
		try{
			println(val1/val2)
		}catch{

			case ex:ArithmeticException => println("Isn't possible division by zero.")
		}
	}
}