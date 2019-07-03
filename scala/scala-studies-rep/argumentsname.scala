object Teste{

	def main(args:Array[String]){
		PrintName("Anderson", "da Conceição")
		PrintName(surname="da Conceição", name="Anderson")
		PrintName(name="Anderson", surname="da Conceição")
	}

	def PrintName(name:String, surname:String){
		println(name + " " + surname)
	}
}