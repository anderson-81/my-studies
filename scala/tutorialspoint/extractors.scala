object extractors {
	
	def main(args: Array[String]): Unit = {
	  println(apply("anderson", "domain81.com"))
	  println(unapply("anderson@domain81.com"))
	  println(unapply("asfdhgasfdhgd"))
	}

	def apply(user: String, domain: String): String = {
		user + "@" + domain
	}

	def unapply(email: String): Option[(String, String)] = {
		val parts = email split "@"
		if(parts.length == 2){
			Some(parts(0), parts(1))	
		}else{
			None
		}
	}
}