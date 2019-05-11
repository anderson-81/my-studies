object App{
	
	def fClosure(): Unit = {
    	var fact: Int = 3;
    	val mult = (i: Int) => (i * fact)
    	println(mult(3))
    }
    
	def main(args: Array[String]) {
		fClosure()
	}
}

