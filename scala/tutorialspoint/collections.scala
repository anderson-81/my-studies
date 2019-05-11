import Array._
import java.util.Date

object App{

	def main(args: Array[String]) : Unit = {

		// Lista A:
		val nmslistA: List[String] = List("Anderson", "Paul", "Layla", "Taylor")

		val notlistA: List[Nothing] = List()

		val mtxlistA: List[List[Int]] = List(List(1,0,0), List(0,1,0), List(0,0,1))


		// Lista B:
		val nmslistB = "Anderson" :: ("Paul" :: ("Layla" :: ("Taylor" :: Nil)))

		val notlistB = Nil

		val mtxlistB = 
			(1 :: (0 :: (0 :: Nil))) :: 
		    (0 :: (1 :: (0 :: Nil))) :: 
		    (0 :: (0 :: (1 :: Nil))) :: Nil


		println(nmslistB.tail)
		//println(nmslistA.isEmpty)
		//println(notlistA.head)

		val list1 = List(1,2,3,4)
		val list2 = List(5,6,7)

		for(i <- (list1 ::: list2)){
			println(i)
		}

		//println(list1.:::list2)

		for(i <- (List.fill(3)(nmslistA))){
			for(p <- i){
				println(p)
			}
		}

		println()


		var sqr = List.tabulate(7)(n => n * 3)
		println(sqr)
		
		var set1: Set[Int] = Set[Int](0,1,2,3,4,5,6,7)
		for(i <- set1){
			println(i)
		}

		var set2: Set[Int] = Set()

		var set3 = Set(0,-1,33)

		println(set1++set3)

		println(set1.min)
		println(set1.max)
		println( "set1.&(set3) : " + set1.&(set3))
        println( "set1.intersect(set3) : " + set1.intersect(set3))

        var map = Map(1 -> "Verde", 2 -> "Amarelo", 3 -> "Azul", 4 -> "Branco")
        map.keys.foreach{ i => println(s"${i} - ${map(i)}") }

        var tup = (1, "Anderson", 7263.11f, new Date("06/08/1987"), 'M', true)
        tup.productIterator.foreach{ i => println(s"- ${i}") }
        println(s"Name: ${tup._2}")
	}
}