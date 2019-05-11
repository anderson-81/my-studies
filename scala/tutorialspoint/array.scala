import Array._

object App{

	def matrix(): Unit = {
		var x: Int = 3
		var y: Int = 3
		var matrix = ofDim[Int](3,3)

		for(x <- 0 to (x - 1)){
			for(y <- 0 to (y - 1)){
				matrix(x)(y) = x + y
			}
		} 

        println("\nMatrix:")
		for(x <- 0 to (x - 1)){
			for(y <- 0 to (y - 1)){
				println(s"- [${x},${y}] = ${matrix(x)(y)}")
			}
		} 
	}

	def concatMatrix() : Unit = {

		var matrix1 = Array(1,2,3,4)
		var matrix2 = Array(5,6,7)
		var matrix3 = concat(matrix1, matrix2)

		println("\nConcat Array:")

		for(item <- matrix3){
			println(item)
		}
	}

	def arrayRanger(): Unit = {
		
		var arr = range(10, 30, 3)
		
		println("\nRanger List:")
		for(i <- arr){
			println(i)
		} 
	}

	def main(args: Array[String]): Unit = {
		var sarr: Array[String] = new Array[String](3)
		sarr(0) = "Anderson"
		sarr(1) = "Mara"
		sarr(2) = "Adriana"
		
		var narr = Array(7,1,2,6,3,4,5)

		/****************/

		println(sarr(0))
		
		println("\nNames's list:")
		for(name <- sarr){
			println(s"- ${name}")
		}

		println("\nNumbers's list:")
		for(number <- narr){
			println(s"- ${number}")
		}

		println("\nNames's list (lenght):")
		for(i <- 0 to (sarr.length - 1)){
			println(s"- ${sarr(i)}")
		}

		/*****************/

		matrix()

		concatMatrix()

		arrayRanger()
		
	}
}