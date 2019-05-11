var cont: Int = 0

def incrementUnit : Unit = {
	cont = cont + 1
	println(s"- Incrementing... ${cont}")
	if(cont < 10){
		incrementUnit
	}
} 

incrementUnit

