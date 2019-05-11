import java.io._

object App {

	def Write(): Unit = {
		val writer = new PrintWriter(new File("hello.txt"))	  
		writer.write(s"Hello, World!")
		writer.close()
	}

	def main(args: Array[String]): Unit = {
		Write()
	}
}