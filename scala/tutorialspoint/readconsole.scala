object App {

	def Read(): Unit = {
		print("Enter your name: ")
		var name = Console.readLine
		println(s"Hello, ${name}!")
	}

	def main(args: Array[String]): Unit = {
		Read()
	}
}