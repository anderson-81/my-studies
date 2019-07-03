object Object{

	def main(args:Array[String]){
	
		var list_range = List.range(0,40,5)
		var tab = List.tabulate(10){ a => a*a } //1*1,2*2,3*3...
		var _fill = List.fill(5){10}

		println(list_range)

		println("\n\nRange")
		list_range.foreach{
			println(_)
		}

		println("\n\nTabulate")
		tab.foreach{
			println(_)
		}

		println("\n\nFill")
		_fill.foreach{
			println(_)
		}

		var conc = list_range ::: tab
		println("\n\nConcatenate")
		conc.foreach{
			println(_)
		}
	}
}