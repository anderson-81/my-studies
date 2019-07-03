class Person{
	var id:Int = 1
	var name:String = "Anderson"
	var salary:Double = 5362.32
	var status:Char = 'A'

	def printData() = {
		println ("ID: " + id)
		println ("Name: " + name)
		println ("Salary: " + salary)
		println ("Status: " + status)
	}
}

object Test{
	def main(args:Array[String])
	{
		var obj = new Person
		obj.printData()
	}
}