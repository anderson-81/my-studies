object Object{
	def main(args:Array[String]){

		var f=()=> println("Hello, World")
		f()

		var c=(val1:Int,val2:Int) => println(val1+val2)
		c(30,5)

		var s=(val1:Int,val2:Int) => (val1-val2)
		println(s(30,5))

		var m=(val1:Int,val2:Int) => "Result = " + (val1*val2)
		println(m(7,5))
	}
}