class Pessoa
	#Constantes de Classe
	TITULO = "Eu sou a classe Pessoa"

	#Variavel de classe
	@@contador = 0
	
	#Constructor
	def initialize(codigo, nome)
		setCodigo(codigo)
		setNome(nome)
		@@contador+=1
	end

	def setCodigo(codigo)
		@codigo = codigo
	end

	def getCodigo
		@codigo
	end

	def setNome(nome)
		@nome = nome
	end

	def getNome
		@nome
	end

	def MetodoPrivado
		puts "Sou Pessoa"
	end

	#Formatando a impressão __STR__ or string()
	def to_s
		"#{@codigo} --- #{@nome}" 
	end

	def getContador
		@@contador
	end

	#Class Information:
	#puts "Type of self = #{self.type}"
  #puts "Name of self = #{self.name}"

	#Encapsulamento do métodos
	private :setCodigo, :setNome

	public :getCodigo, :getNome, :getContador, :getInformationClass

	protected :MetodoPrivado
end

class PessoaFisica < Pessoa
	#Constantes de Classe
	TITULO = "Eu sou a classe PessoaFisica"

	def MetodoPrivado
		puts "Sou PessoaFisica"
	end
end

pf = PessoaFisica.new(123, "Anderson")
pf = PessoaFisica.new(123, "Anderson")
pf = PessoaFisica.new(123, "Anderson")
pf = PessoaFisica.new(123, "Anderson")
pf = PessoaFisica.new(123, "Anderson")
pf = PessoaFisica.new(123, "Anderson")
pf = PessoaFisica.new(123, "Anderson")
puts "#{pf}"
puts pf.getContador
puts Pessoa::TITULO
puts PessoaFisica::TITULO
puts pf.getInformationClass


