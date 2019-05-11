object App{
	
	def Calc(val1:Int, val2:Int) : Float = {
		return val1 + val2
	}
	def Show(name: => String) : Unit = {
		println(s"Hello, ${name}!")
	}

	def calcArgVariable(numbers:Int*) : Unit = {
		if(numbers(1) == null){
			println("Don't sum.")
		}else{
		    println(numbers(0) + numbers(1))
		}
	}

	def showArgVariable(text:String*) : Unit = {
		println(s"${text}")
	}

	/*
	def sumDefaultArgs(val1:Int => 3, val2:Int => 7): Unit = {
		println(val1 + val2)
	}
	*/

    // Factorial
	def outFunction(): Unit = {
		def innerFunction(): Unit = {
			println("Hello, World!")
		}
		innerFunction() 
	}

	def functPartial(num1: Int, num2: Int){
		println(num1 + num2)
	}

	def factorial(n: BigInt): BigInt = {  
      if (n <= 1)
         1  
      else    
      n * factorial(n - 1)
    }

    /*******/
    def showNumber[A](x:A) = x.toString() 
    def apply(function: Int => String, number: Int) = function(number)
    /*******/

    def anonymFunction(): Unit = {
    	var f1 = (x : Int) => x * 3
    	var f2 = (x: Int, y: Int) => x * y
    	var f3 = () => 30 + 7
     
    	println(f1(11))
    	println(f2(3,7))
    	println(f3())
    }

    def strCat(text: String)(name : String) = text + " " + name

    def fClosure(): Unit = {
    	var fact: Int = 3;
    	val mult = (i: Int) => i * fact
    	println(mult(3))
    }
    
	def main(args: Array[String]) {
		println(Calc(2,5))
		Show("Anderson")
		showArgVariable("Hello", "Anderson!")
		calcArgVariable(1,2)
		// sumDefaultArgs()
		outFunction()

		var num1 : Int = 30
		functPartial(num1, 7)

		println(Calc(val2 = 30, val1 = 7))

		factorial(4)

		println(apply(showNumber, 33))

		anonymFunction()

		println(strCat("Hello,")("Anderson!"))

		fClosure()
	}
}

