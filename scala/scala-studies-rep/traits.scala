trait Trait{
	def Show()
}

class Classe extends Trait{
	def Show(){
		println("Hello, World!")
	}
}

object Principal{
	def main(args:Array[String]){
		var obj:Classe = new Classe
		obj.Show()
	}
}