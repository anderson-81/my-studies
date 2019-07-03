#Saudação
puts "Hello, World!";



#Documentation 
	'''
	print <<EOF
	    This is the first way of creating
	    here document ie. multiple line string.
	EOF

	print <<"EOF";                # same as above
	    This is the second way of creating
	    here document ie. multiple line string.
	EOF

	print <<`EOC`                 # execute commands
		echo hi there
		echo lo there
	EOC

	print <<"foo", <<"bar"  # you can stack them
		I said foo.
	foo
		I said bar.
	bar
	'''

class Simple
	def Hello
		puts "Hello, World!"
	end
end


obj = Simple.new
obj.Hello

#Variaveis globais:
$contador = 0
def funcao1
	$contador += 1
	puts $contador
end

def funcao2
	$contador += 1
	puts $contador
end

class Incrementa
	def funcao
		$contador += 1
		puts $contador
	end
end

funcao1
funcao2
obj1 = Incrementa.new
obj2 = Incrementa.new
obj1.funcao
obj2.funcao

#Variaveis de Instancia:
class Pessoa
	def initialize(codigo, nome)
		@codigo = codigo
		@nome = nome
	end

	def Imprimir
		puts "Nome: #@nome"
		puts "Nome: #@codigo"
	end
end

pes = Pessoa.new(123, "Anderson")
pes.Imprimir

#Variáveis de Classe
class Teste
	@@contador = 0
	def initialize
		@@contador+=1
	end

	def Imprimir
		puts "Quantidade de Instancias => #@@contador"
	end
end

t1 = Teste.new
t1 = Teste.new
t1 = Teste.new
t1 = Teste.new
t1 = Teste.new
t1 = Teste.new
t1 = Teste.new
t1.Imprimir

#Ruby Constants:
class ClassConstants
	CONSTANTE = 33
	def Imprimir
		puts "Quantidade de Instancias => #{CONSTANTE}"
	end
end

cc = ClassConstants.new
cc.Imprimir


#Ruby Pseudo-Variables:
def Pseudo
	bt = true
	bf = false
	var_nil = nil
	puts __FILE__
	puts __LINE__
	puts self
end

Pseudo()

#Backslash Notations:
def BackNot

end

BackNot()

#Ruby Arrays:
def Array01
	vetor = [1,"Anderson",true,5.6,nil,'M']
	vetor.each do |item|
		if item == nil
			puts "Valor Nulo"
		else
			puts item
		end
	end	
	puts vetor
end

Array01()

#Ruby Hashes:
def HashFunction
	hash1 = {1 => 'Verde', 2 => 'Amarelo', 3 => 'Azul', 4 => 'Branco'}
	hash1.each do |key,value|
		puts "#{key} -- #{value}"
	end
end

HashFunction()

#Ruby Ranges:
def RangeFunction
	(-33...0).each do |numero|
		puts numero
	end
end

RangeFunction()

#Ruby Arithmetic Operators:
class Calculadora
	@valor1 = 0
	@valor2 = 0
	
	def initialize(valor1, valor2)
		@valor1 = valor1
		@valor2 = valor2
	end
	def Somar
		return @valor1+@valor2
	end	
	def Subtrair
		return @valor1-@valor2
	end	
	def Multiplicar
		return @valor1*@valor2
	end	
	def Dividir
		return @valor1/@valor2
	end	
	def Modular
		return @valor1%@valor2
	end	
	def Potenciar
		return @valor1**@valor2
	end	
end

c = Calculadora.new(10,2)
puts c.Potenciar


#Ruby Comparison Operators:
class Comparacao
	@valor1 = 0
	@valor2 = 0
	
	def initialize(valor1, valor2)
		@valor1 = valor1
		@valor2 = valor2
	end
	def Igual
		return @valor1 == @valor2
	end	
	def Diferente
		return @valor1 != @valor2
	end	
	def Maior
		return @valor1 > @valor2
	end	
	def Menor
		return @valor1 < @valor2
	end	
	def MaiorIgual
		return @valor1 >= @valor2
	end	
	def MenorIgual
		return @valor1 <= @valor2
	end	
	def MenorIgualMaior
		return @valor1 <=> @valor2
	end	
	def IgualTipo
		return @valor1 === @valor2
	end	
	def Eql
		return @valor1.eql?(@valor2) 
	end	
	def Equal
		return @valor1.equal?(@valor2)
	end	
end

cmp = Comparacao.new(3,4)
puts cmp.Igual()
puts cmp.Diferente()
puts cmp.Maior()
puts cmp.Menor()
puts cmp.MaiorIgual()
puts cmp.MenorIgual()
puts cmp.MenorIgualMaior()
puts cmp.IgualTipo()
puts cmp.Eql()
puts cmp.Equal()

#Ruby Assignment Operators:
class Atribuicao
	@@valor = 0

	def Somar
		@@valor += 3
		puts "#{@@valor}"
	end	
	def Subtrair
		@@valor -= 1
		puts "#{@@valor}"
	end	
	def Multiplicar
		@@valor *= 1
		puts "#{@@valor}"
	end	
	def Dividir
		@@valor /= 1
		puts "#{@@valor}"
	end	
	def Modular
		@@valor %= 1
		puts "#{@@valor}"
	end	
	def Potenciar
		@@valor **= 3
		puts "#{@@valor}"
	end	
end

obj = Atribuicao.new
obj.Somar
obj.Subtrair
obj.Multiplicar
obj.Dividir
obj.Modular
obj.Potenciar

#Ruby Parallel Assignment:
def Paralelo
	a, b, c = 12, 11, 1981
	puts a
	puts b
	puts c
end

Paralelo()

#Ruby Bitwise Operators:
class Bit
	def initialize(valor1,valor2)
		@valor1 = valor1
		@valor2 = valor2
	end

	def ANDOperator
		puts @valor1&&@valor2
	end	
	def OROperator
		puts @valor1||@valor2
	end	
	def XOROperator
		puts @valor1^@valor2
	end	
	def NOOperator
		puts ~@valor1
	end	
	def LeftShiftOperator
		puts @valor1 << @valor2
	end	
	def RightShiftOperator
		puts @valor1 >> @valor2
	end	
end


bin1 =9
bin2 =8
puts bin1
puts bin2

obj = Bit.new(bin1,bin2)
obj.ANDOperator()
obj.OROperator()
obj.XOROperator()
obj.NOOperator()
obj.LeftShiftOperator()
obj.RightShiftOperator()


#Ruby Logical Operators:
class Logica
	def initialize(valor1,valor2)
		@valor1 = valor1
		@valor2 = valor2
	end
	def ANDOperator1
		puts @valor1&&@valor2
	end	
	def OROperator
		puts @valor1||@valor2
	end	
	def ANDOperator2
		puts @valor1 and @valor2
	end	
	def OROperator
		puts @valor1 or @valor2
	end	
	def NotOperator1
		puts "~(@valor1)"
	end	
	def NotOperator2
		puts not(@valor1)
	end	
end

lg = Logica.new(true, false)
lg.ANDOperator1()
lg.OROperator()
lg.ANDOperator2()
lg.OROperator()
lg.NotOperator1()
lg.NotOperator2()


#Ruby Ternary operator:
def Ternario
	exp = true
	exp ? valor = 1 : valor = 0
	puts valor
end

Ternario()

#Ruby Range operators:
def RangeTest
	(1..10).each do |item|
		puts(item)
	end

	(1...10).each do |item|
		puts(item)
	end
end

RangeTest()

VarGlobal = 30
#Ruby defined? operators:
def TestDefined
	valor = 30
	puts defined? valor
	puts defined? VarGlobal
	puts defined? puts        
	puts defined? Pessoa
end

TestDefined()

#Ruby dot "." and double Colon "::" Operators:
CONST = 2
class TesteColon
	CONST = 1
	def PrintConst
  	print("#{::CONST} -- #{CONST}")
  end
end

obj = TesteColon.new
obj = TesteColon.new
obj = TesteColon.new
obj = TesteColon.new
obj = TesteColon.new
obj = TesteColon.new
obj.PrintConst()


#COMENTÁRIOS
=begin
This is a multiline comment and con spwan as many lines as you
like. But =begin and =end should come in the first line only. 
=end

#Ruby if...else Statement:
def IfElse01
	exp = true
	if exp
		puts "\nVerdadeiro"
	else
		puts "\nFalso"
	end
end

IfElse01()

#Ruby if modifier:

def IfModifier
	$debug = 1
	puts "Debug!!!" if $debug
end

IfModifier()


#Ruby unless Statement:
def unlessStat
	exp = false
	unless exp
		puts "Falso"
	else	
		puts "Verdadeiro"
	end
end

unlessStat()

#Ruby unless modifier:
def unlessModif
	$var = false
	puts "verdadeiro" if $var
	puts "falso" unless $var
end

unlessModif()

#Ruby case Statement
def CaseStat
	$opcao = 3
	case $opcao
	when 1,3
		puts "Opção 01 ou 03"
	when 2
		puts "Opção 02"
	when 4
		puts "Opção 04"
	else
		puts "Opção Inválida"
	end
end

CaseStat()

#Ruby while Statement:
def While
	$cont = 0
	while $cont < 10
		puts $cont
		$cont+=1
	end
end

While()

#Ruby while modifier:
def WhileMod
	$cont = 0
	begin
		puts $cont+=1
	end while $cont < 10
end

WhileMod()

#Ruby until Statement:
def untilStat
	$cont = 0
	$lmt = 10
	until $cont > $lmt #Contrario ao While
		puts $cont
		$cont+=1
	end
end

untilStat()

#Ruby until modifier:
def untilMdf
	$cont = 0
	begin
		puts $cont
		$cont+=1
	end until $cont > 10
end

untilMdf()

#Ruby for Statement:
def For
	for i in 0..10
		puts i
	end

	for i in 0...10
		puts i
	end
end

For()

#Ruby break Statement:
def breakStat
	$cont = 0
	while $cont < 10
		if $cont == 5
			break
		end
		puts $cont
		$cont+=1
	end
end

breakStat()

#Ruby next Statement:
def breakStat
	for i in 0..5
		if i < 2
			next
		end
		puts i
	end
end

breakStat()

#Ruby redo Statement:
def redoStat
	for i in 0..5
		if i < 5 then
			puts i
			redo
		end
	end
end

#redoStat()

#Ruby retry Statement:
'''
def retryStat
	for i in 1..5
		retry if  i > 2
	  puts "Value of local variable is #{i}"
	end
end

retryStat()
'''

#Functions And Parameters:
def function1(var1=123, var2='Anderson')
	puts var1
	puts var2
end

def function2(*args)
	puts args[0]
	puts args[1]
end

def function3(**kwargs)
	puts kwargs['codigo']
	puts kwargs['nome']
end

#alias 'funcao1', 'function1'
#alias 'funcao2', 'function2' 
#alias 'funcao3', 'function3' 

function1()
function2(123,"Anderson")
#function3(codigo=321, nome="Mara")


#Ruby undef Statement:
undef function1 #Elimina a declaração de uma função.
#function1()

#The yield Statement:
def yieldStat
	puts "Dentro do método"
	yield
	puts "De volta ao método"
	yield
end

yieldStat{puts"Dentro do Bloco"}

#The yield Statement with parameters:
def yieldStat
   yield 5
   puts "You are in the method test"
   yield 100
end
yieldStat {|i| puts "You are in the block #{i}"}

#Blocks and Methods:
def BlocksAndMethods
	puts "BEGIN"
	yield
	puts "END"
end
BlocksAndMethods { 
	puts "Hello, World!"
}

BlocksAndMethods { 
	valor = true
	if true
		puts "Verdadeiro"
	else
		puts "Falso"
	end
}

#Blocks and Methods with args:
def BlocksAndMethods(&argumento)
	argumento.call
end
BlocksAndMethods { 
	puts "Hello, World!"
}


#BEGIN and END Blocks
print("\nMiddle execution.")

END{
	print("\nFinal execution.")
}

BEGIN{
	print("\nBegin execution.")
}


#Ruby Modules and Mixins
'''
def ModuloTest
	require "Modulo"
	Modulo::Metodo1
	Modulo::Metodo2
	Modulo::Metodo3
end

ModuloTest()
'''


#Expression Substitution:
def ExpSub
	x, y, z = 9, 16, 25
	puts "\nx = #{x}"
	puts "(x+y)-5 = #{(x+y)-5}"
end

ExpSub()


#General Delimited Strings:
def GenDelStr
	print "%{Ruby is fun.}"
	print "%Q{ Ruby is fun. }"
	print "%q[Ruby is fun.]"
	print "%x!ls!"
end

GenDelStr()

#String Built-in Methods:
def StrBuilt
	puts "abc \0\0abc \0\0".unpack('A6Z6')   #=> ["abc", "abc "]
	puts "abc \0\0".unpack('a3a3')           #=> ["abc", " \000\000"]
	puts "abc \0abc \0".unpack('Z*Z*')       #=> ["abc ", "abc "]
	puts "aa".unpack('b8B8')                 #=> ["10000110", "01100001"]
	puts "aaa".unpack('h2H2c')               #=> ["16", "61", 97]
	puts "\xfe\xff\xfe\xff".unpack('sS')     #=> [-2, 65534]
	puts "now=20is".unpack('M*')             #=> ["now is"]
	puts "whole".unpack('xax2aX2aX1aX2a')    #=> ["h", "e", "l", "l", "o"]
end

StrBuilt()


#Creating Arrays:

def CreatingArrays
	vetor1 = Array.new(7)
	puts vetor1.size
	puts vetor1.length
	#**************************#
	vetor2 = Array.new(7, "Anderson")
	puts vetor2
	#**************************#
	vetor3 = Array.[](1,2,3,4,5,6,7)
	puts vetor3
	#**************************#
	vetor4 = Array[1, 2, 3, 4,5]
	puts vetor4
end

CreatingArrays()

#Array Built-in Methods:
def ArrayBuiltMethods
	vetor = Array(-5..5)
	puts vetor
	puts vetor.at(3)
end

ArrayBuiltMethods()

#Creating Hashes:
def CreatingHashes
	months1 = Hash.new("month")
	months2 = Hash.new "month"
	puts "#{months1[1]}"
	puts "#{months2[3]}"

	hash = ["codigo" => 123, "nome" => "Anderson"]
	puts hash

	$, = ", "
	months = Hash.new( "month" )
	months = {"1" => "January", "2" => "February"}
	keys = months.keys
	puts "#{keys}"

end

CreatingHashes()

#Getting Current Date and Time:
def GetCurrDateTime
	time1 = Time.new
	puts time1
	puts time1.inspect
end

GetCurrDateTime()

#Getting components of a Date & Time:
def GetComponentDateTime
	time = Time.new
	# Components of a Time
	puts "Current Time : " + time.inspect
	puts time.year    # => Year of the date 
	puts time.month   # => Month of the date (1 to 12)
	puts time.day     # => Day of the date (1 to 31 )
	puts time.wday    # => 0: Day of week: 0 is Sunday
	puts time.yday    # => 365: Day of year
	puts time.hour    # => 23: 24-hour clock
	puts time.min     # => 59
	puts time.sec     # => 59
	puts time.usec    # => 999999: microseconds
	puts time.zone    # => "UTC": timezone name
end

GetComponentDateTime()

#FunctionsDate
def FunctionsDate
	puts Time.local(1981, 11, 12)  
	puts Time.local(1981, 11, 12, 10, 30)   
	puts Time.utc(1981, 11, 12, 10, 30)  
	puts Time.gm(1981, 11, 12, 10, 30, 00)  
end

FunctionsDate()


#Formatting Times and Dates:
def FormatTimesDates
	time = Time.new
	puts time.to_s
	puts time.ctime
	puts time.localtime
	puts time.strftime("%Y-%m-%d %H:%M:%S")
	puts time.strftime("%d/%m/%Y")
end

FormatTimesDates()

#Time Arithmetic:
def TimeArithmetic
	data = Time.local(Time.now.year - 18, Time.now.month, Time.now.day)  
	puts data.strftime("%d/%m/%Y")
end

TimeArithmetic()

#Ranges as Sequences:
def RgSeq
	seq1 = (0..10).to_a
	seq2 = (0...10).to_a
	seq3 = ('a'..'c').to_a
	puts "#{seq1}"
	puts "#{seq2}"
	puts "#{seq3}"
end

RgSeq()

#RangesMethods

def RangesMethods
	rg = 1..10
	puts "Menor valor = #{rg.min}"
	puts "Maior valor = #{rg.max}"
	rg_reject = rg.reject {|i| (i % 2 == 0)}
	puts rg_reject	
end

RangesMethods()

#Ranges as Conditions:
def RangesConditions
	pontos = 100
	resultado = case pontos
		when 0..49 then 
			puts "Falhou!"
		when 50..69 then 
			puts "Na média!"
		when 70..80 then 
			puts "Bem!"
		when 81..99 then 
			puts "Ótimo!"
		when 100 then 
			puts "Perfeito!"
	end
end

RangesConditions()

#Ranges as Intervals:
def RangesIntervals
	if ((1..10) === 5)
	  puts "5 lies in (1..10)"
	end

	if (('a'..'j') === 'c')
	  puts "c lies in ('a'..'j')"
	end

	if (('a'..'j') === 'z')
	  puts "z lies in ('a'..'j')"
	end
end

RangesIntervals()


#Ruby each Iterator:
def RubyEachIterator
	vetor = -7..7
	vetor.each do |item|
		puts item
	end
end

RubyEachIterator()

#Ruby collect Iterator:
def RubyCollectIterator
	vetor = 1..7
	colecao = vetor.collect{|item| item * 2}
	puts "#{colecao}"
end

RubyCollectIterator()

#Ruby File I/O, Directories

def EscreverArquivo
	arquivo = File.new("texto.txt", "w+")
  if arquivo
  	arquivo.syswrite("Hello, World!")
		arquivo.close()
	else
		puts "Arquivo não pode ser aberto."
	end
end

def LerArquivo
	arquivo = File.new("texto.txt", "r")
  if arquivo
  	texto = arquivo.sysread (20)
		puts texto
		arquivo.close()
	else
		puts "Arquivo não pode ser aberto."
	end
end

EscreverArquivo()
LerArquivo()

#The gets Statement:
def getsStat
	puts "Informe o seu nome: "
	nome = gets
	puts "Hello, #{nome}!!!"
end

#getsStat()

#The putc Statement:
def putcStat
	str="Anderson"
	putc str
end

putcStat()

#The print Statement: #MESMA LINHA
def printStat
	print "Hello World"
	print "Good Morning"
end

printStat()


#The each_byte Method:
def eachbyte
	aFile = File.new("texto.txt", "r+")
	if aFile
	   aFile.syswrite("ABCDEF")
	   aFile.each_byte {|ch| putc ch; putc ?. }
	else
	   puts "Unable to open file!"
	end
end

eachbyte()

#The IO.readlines Method:
def IOreadlines
	arr = IO.readlines("texto.txt")
	puts arr[0]
	puts arr[1]
end

IOreadlines()

#The IO.foreach Method:
def IOforeach
	IO.foreach("texto.txt"){|block| puts block}
end

IOforeach()

#Renaming and Deleting Files:
def RenDeletingFiles
	#arquivo = File.new("arquivo1.txt", "w")
	#arquivo.close()
	#File.delete("arquivo1.txt")
end

RenDeletingFiles()

#File Modes and Ownership:
def FileModesOwnership
	arquivo = File.new("arquivo_novo.txt", "w")
	arquivo.chmod(0755)
	arquivo.close()
end

FileModesOwnership()

#File Inquiries:
def FileInquiries
	
	#Testando antes de ser aberto:
	File.open("texto.txt") if File::exists?("texto.txt")

	#Verificar se é um arquivo
	puts File.file?("texto.txt")

	#Verificar se é um diretório
	puts File.directory?("D:\\Pro Evolution Soccer 2013")

	#Verificando caracteristicas do arquivo:
	puts File.readable?("texto.txt")
	puts File.writable?("texto.txt")
	puts File.executable?("main.rb")

	#Verificando se o arquivo tem tamanho = 0
	puts File.zero?("texto.txt")

	#Verificando o tamanho do arquivo:
	puts File.size?("main.rb")

	#Verificando o tipo do arquivo:
	puts File.ftype("main.rb")

	#Verificando datas de edição
	puts File::ctime("texto.txt")
	puts File::mtime("texto.txt")
	puts File::atime("texto.txt")
end

FileInquiries()

#Directories in Ruby:
def DirectoriesRuby
	#Mudar de diretório.
	Dir.chdir("D:\\")

	#Diretorio corrente.
	puts Dir.pwd

	#Listando o que há em um diretorio.
	puts Dir.entries("D:\\").join("\n-")
	
	#Listando o que há em um diretorio.
	Dir.foreach("F:\\") do |item|
		puts "#{item}"
	end


end

DirectoriesRuby()


#Creating a Directory:
def CreatingDirectory
	Dir.chdir(__dir__)
	Dir.mkdir("pasta1")
	Dir.mkdir("pasta2", 0755)
	puts "Pastas criadas."
	sleep(3) #Half a second
	Dir.delete("pasta1")
	Dir.delete("pasta2")
	puts "Pastas excluídas."
end

#CreatingDirectory()

#Creating Files & Temporary Directories:
require 'tmpdir'
def CreatingTempFilesAndDir 
	Dir.chdir(__dir__)
	tmpfileDir = File.join(Dir.tmpdir, "TempFolder")
	tmpfile = File.new(tmpfileDir, "w")
	puts "Hello, World!"
	sleep(3) #Half a second
	tmpfile.close()
	File.delete(tmpfileDir)
end

#CreatingTempFilesAndDir()

#Exceptions

def TratException
	begin
		valor = 10/1
		raise "Erro simulado!"
		arquivo = File.new("nvo.exe", "r")
		arquivo.close()
	rescue ZeroDivisionError
		puts "Erro ao dividir por zero."
	rescue StandardError => e
		raise "Erro!"
	ensure
		puts "Fim do Block."
	end
end

TratException()



































































