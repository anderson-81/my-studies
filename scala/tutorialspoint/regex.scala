object App{
	def main(args: Array[String]): Unit = {
		var email = ""
		var pattern: String = """\b[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\b"""
		
		email = "123"
		println(email.matches(pattern))
		
		email = "dadasdas@twyetyww.com"
		println(email.matches(pattern))
		
		email = "dasdasdas"
		println(email.matches(pattern))
	}	
}