trait One{
	def Method(){
		println("Trait One.")
	}
}

trait Two extends One{
	override def Method(){
		println("Trait Two.")
	}
}

trait Three extends One{
	override def Method(){
		println("Trait Three.")
	}
}

class Classe extends Two with Three

object Object{
	def main(args:Array[String]){
		var obj:Classe = new Classe
		obj.Method()
	}
} 

