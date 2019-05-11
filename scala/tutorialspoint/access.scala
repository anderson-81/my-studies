class Super{
	def superMethod(){
		println("\nSuper method!")
	}
}


class Outer extends Super{
	private def fo1(){
		print("\nPrivate method (Outer).")
	}
	protected def fo2(){
		print("\nProtected method (Outer).")
	}

	class Inner{
		protected def fi1(){
			print("\nProtected method (Inner).")
		}
		private def fi2(){
			print("\nPrivate method (Inner).")
		}

		def init(){
			(new Inner).fi1()
			(new Outer).fo1()
		}
	}
	
	def init(){
		(new Outer).fo1()
		(new Outer).fo2()
		(new Inner).init()
		(new Super).superMethod()
	}
}

(new Outer).init()
