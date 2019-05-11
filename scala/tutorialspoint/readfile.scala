import scala.io.Source

object App {

	def Read(): Unit = {
		Source.fromFile("hello.txt").foreach { print }
	}

	def main(args: Array[String]): Unit = {
		Read()
	}
}