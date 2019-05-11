import Array._

def selectColor(opc: Int): String = opc match {
	case 1 => "Green"
	case 2 => "Yellow"
	case 3 => "Blue"
	case 4 => "White"
	case _ => "Red"
}

println(selectColor(3))
println(selectColor(6))
println(selectColor(_))

var numbers = range(0,10,1)
for(i <- numbers){
	var result1 = ((i % 2) == 0)
	var result2 = ((i % 2) == 0)
	var result = result1 && result2

	result match {
		case true  => println(s"${i} is even number.")
		case false => println(s"${i} is odd number.")
	}
}

/**************/

case class Person(id: Int, name: String)

val alice = new Person(1, "Alice")
val bob = new Person(2, "Bob")
val charlie = new Person(3, "Charlie")
val lissa = new Person(4, "Lissa")

for(person <- List(alice, bob, charlie, lissa)){
	person match {
		case Person(1, "Alice") => println("Hello, Alice.")
		case Person(2, "Bob") => println("Hello, Bob.")
		case Person(3, "Charlie") => println("Hello, Charlie.")
		case _ => println("Other person.")
	}
}