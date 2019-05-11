/*
O Scala foi criado por Martin Odersky e ele 
lançou a primeira versão em 2003.

Scala, abreviação de Scalable Language.

O Scala é compilado para ser executado na Java Virtual Machine.

Scala, ao contrário de algumas das outras linguagens estaticamente 
tipadas (C, Pascal, Rust, etc.), não espera que você forneça 
informações de tipo redundantes.

O Scala permite usar todas as classes do Java SDK e também suas próprias 
classes Java personalizadas ou seus projetos Java de código aberto favoritos.

O Scala possui um conjunto de recursos que diferem completamente do Java. 
Alguns destes são:

	Todos os tipos são objetos
	Inferência de tipos
	Funções aninhadas
	Funções são objetos
	Suporte a idioma específico de domínio (DSL)
	Traços
	Fechamentos
	Suporte de concorrência inspirado por Erlang

Frameworks web:
	https://liftweb.net/
	https://www.playframework.com/

---------------

A maior diferença sintática entre Scala e Java é que o ';' 
O caractere final da linha é opcional.

Um objeto é uma instância de uma classe.
(Classe) descreve os comportamentos / estados relacionados à classe.
Um método é basicamente um comportamento.
(CAMPOS) O estado de um objeto é criado pelos valores atribuídos a esses campos.

Um fechamento é uma função cujo valor de retorno depende do valor 
de uma ou mais variáveis ​​declaradas fora dessa função.

Os traços são usados ​​para definir tipos de objetos, 
especificando a assinatura dos métodos suportados.

*/

object Calc{

	def sum(val1:Int, val2:Int){
		print(val1+val2)
	}
	def sub(){
		print("sub")
	}
	def mlt(){
		print("mlt")
	}
	def div(){
		print("div")
	}
	def mod(){
		print("mod")
	}
}

// Inheritance

class Person(val _id: Int, val _name: String){
	var id: Int = _id
	var name: String = _name
}

class PhysicalPerson(val _birthday: String, val _gender: Char, override val _id: Int, override val _name: String) extends Person (_id, _name){
	var birthday: String = _birthday
	var gender: Char = _gender
}


/**************************************/

class Point(val _x: Int, val _y: Int){
	val x: Int = px: Int
	val y: Int = py: Int
}


/**************************************/

object App{
	def main(args: Array[String]){
		val name = "Anderson"; print("Hello, " + name + " !")
		
		val lorem = """ Lorem ipsum dashdashgfdhgas ts twreytqwryteqw yteytwyt 
		wqyteet eyuwe yuquw euwteqw
		quwy equiwy uieqwy uiqwyeuiqwe i"""
		print(lorem)
		multAttr()

		val p = new PhysicalPerson("12/11/1981", 'M', 123, "Anderson");
		print("\n" + p.id + " - " + p.name + " - " + p.birthday + " - " + p.gender)
	}

	def typeData(){
		var id: Byte = 123
		var name: String = "Anderson"
		var age: Short = 37
		var salary: Float = 6535.11f
		var score: Double = 77.3725362537123652
		//val hash: Long = 9223372036854775807
		var photo = None: Option[Byte]
		var birthday: Any = "1981-11-12"
		var status: Boolean = true
		var gender: Char = 'M'
	}

	def multAttr(){
		val(id:Int, name:String) = (1,"Anderson")
		print(id + " - " + name)
	}
}

// Chamando aqui com main, desabilita o main para o funcionamento.
//Calc.mlt()








