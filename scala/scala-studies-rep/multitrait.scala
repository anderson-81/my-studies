trait One{
	var name:String = "Anderson"
	var age:Int
}

trait Two{
	def Show()
}

abstract class PersonABS extends One with Two{
}

class Person extends PersonABS{

	var age = 35
	def Show(){
		println("Person class")
		println(name)
		println(age)
	}
}

object Principal{
	def main(args:Array[String]){
		var obj:Person = new Person
		obj.Show()
	}
}