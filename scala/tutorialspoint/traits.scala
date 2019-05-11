trait Trait extends Any {
	def show(name: String): Unit
}

class Above {
}

class Under extends Above with Trait  {
	def show(name: String): Unit = {
		println(s"Hello, ${name}!")
	}
}

object App{
	def main(args: Array[String]): Unit = {
		var name: String = ""
		for(i <- args){
			name = name + i
		}

		var obj = new Under()
		obj.show(name)
		println(s"obj.isInstanceOf[Under] = ${obj.isInstanceOf[Under]}")
		println(s"obj.isInstanceOf[Above] = ${obj.isInstanceOf[Above]}") //Sim, por causa da herança;
	}
}