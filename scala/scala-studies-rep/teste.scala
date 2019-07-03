class Classe{
	var codigo:Int = 1
	var nome:String = "Anderson"
	var status:Boolean = true
	var letra:Char = 'A'
	var dobro:Double = 73263.32
	var byte:Byte = 1
	var flutuante:Float = 1f
	var numeroLongo:Long = 78647838
	var short:Short = 127
	
	def PrintDados() = {
		println(codigo)
		println(nome)
		println(status)
		println(letra)
		println(dobro)
		println(byte)
		println(flutuante)
		println(numeroLongo)
		println(short)
	}
}

object Teste{
	def main(args:Array[String]){
		var objeto = new Classe()
		objeto.PrintDados()
	}
}