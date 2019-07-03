object Object{

	def method1(x:Int,y:Int)={x+y}

	def method2(x:Int)={(y:Int)=>x*y}

	def main(args:Array[String]){
		println(method1(30,5))
		println(method2(7)(5))
	}
}