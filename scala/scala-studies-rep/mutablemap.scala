object MutableMap{

	def main(args:Array[String]){

		var col1 = scala.collection.mutable.Map("Anderson" -> 123, "Mara" -> 432, "Adriana" -> 563)
		
		var col2 = col1 + ("person" -> 532)

		for((k,v) <- col2){
			printf("\n%s -- %s", k,v)
		}
	}
}