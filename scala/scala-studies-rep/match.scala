object Object{
	
	/*
	def find(x:Int):String = x match{
		case 1 => "Option 01."
		case 2 => "Option 02."
		case _ => "Default."
	}
	*/

	def find(x:Any):Any = x match{
		case 1 => "Integer"
		case "anderson" => "String"
		case true => "Boolean"
		case 'A' => "Char"
		case 3.5f => "Float"
		case _ => "Default"
	}

	def main(args:Array[String]){

		var opt:Int = 2

		opt match{
			case 1 => println("Option 01.")
			case 2 => println("Option 02.")
			case _ => println("Default.")
		}
		println(find(true))
	}
}