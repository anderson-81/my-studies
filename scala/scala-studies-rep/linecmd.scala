object LineCmd{
	def main(args:Array[String]){
		
		if(args.length >= 1){
			for(let <- args){
					print(let)
			}
		}
		else{
			println("Nothing.")
		}
	}
}