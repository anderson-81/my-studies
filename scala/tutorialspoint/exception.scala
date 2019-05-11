import java.lang._

object App{
	
	def main(args: Array[String]): Unit = {
	  
	  var num1: Int = 7
	  var num2: Int = 0
      var rslt: Int = 0

      try {
      	 rslt = num1 / num2
      } catch {
      	case ex: ArithmeticException => {
      		println("Error to dividing by zero.")
      	}
      } finally{
      	println("Finish.")
      }
	}
}