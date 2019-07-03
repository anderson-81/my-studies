object Arrays{

	def main(args:Array[String])
	{
		var vetor:Array[String] = new Array[String](5)
		vetor(0) = "Anderson"
		vetor(1) = "Mara"
		vetor(2) = "Adriana"
		vetor(3) = "Fernanda"
		vetor(4) = "Michele"

		var i:Int = 0
		while(i < 5){
			println(vetor(i))
			i = i + 1
		}

		for(i <- 0 to 4){
			println(vetor(i))
		}

		//Foreach
		for(item <- vetor){
			println(item)
		}
	}
}