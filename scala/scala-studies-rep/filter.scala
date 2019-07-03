object Object{

	def even(num:Int):Boolean={
		if(num%2 == 0)
			return true
		else
			return false
	}

	def main(args:Array[String]){
		//List-Range
		var list = List.range(1,100)

		//Filter 01
		println("\n\nModular by 2")
		var _filtered1 = list.filter(even)	
		_filtered1.foreach{
			println(_)
		}

		//Filter 02
		println("\n\nModular by 3")
		var _filtered2 = list.filter(temp => (temp%3 == 0))	
		_filtered2.foreach{
			println(_)
		}

		//Filter 03
		println("\n\nModular by 4")
		var _filtered3 = list.filter(_%4 == 0)	
		_filtered3.foreach{
			println(_)
		}
	}
}