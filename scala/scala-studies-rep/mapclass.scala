object MapClass{

	def main(args:Array[String]){

		var map = Map("Adriana" -> 321, "Anderson" -> 123, "Mara" -> 777)

		map += ("Person" -> 654)
		println(map("Mara"))

		map.foreach{
			println(_)
		}

		map -= "Person"

		for((k,v) <- map){
			printf("Key:%s --- Value:%s\n", k, v)
		}
	}
}