implicit class impCalcClass(val1: Int){
	def sum(val2: Int) = val1 + val2
	def sub(val2: Int) = val1 - val2
	def mlt(val2: Int) = val1 * val2
	def div(val2: Int) = val1 / val2
	def mod(val2: Int) = val1 % val2
}

println((3).sum(2))
println((3).sub(2))
println((3).mlt(2))
println((3).div(2))
println((3).mod(2))







