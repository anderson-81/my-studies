
puts 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. 
'

print <<EOF
Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur.
EOF

print <<EOC
Excepteur sint 
occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum.
EOC


=begin
puts "MAIN"
END{
    puts 'END LINE.'
}
BEGIN{
    puts 'BEGIN LINE.'
}
=end


def comentaries
#Comentário
=begin
Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit 
esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum.
=end
puts 'Hello, World!'
end


puts "---------------------------------------------------------------------------"
puts "Classes and Object"

class Person
    @@cont = 0
    def initialize(id, name)
        @id = id
        @name = name
        @@cont = @@cont + 1
    end
    def getcont
        @@cont
    end
end

p1 = Person.new(1, "Anderson")
puts p1
p2 = Person.new(2, "Sarah")
puts p2
p3 = Person.new(3, "Anne")
puts p3
p4 = Person.new(4, "Lucy")
puts p4

puts "Quantidade de objetos: #{p1.getcont}"

puts "---------------------------------------------------------------------------"
puts "Ruby - Variables, Constants and Literals"

$global_var = 100

class Classe1
    def display
        puts "super: #{defined? super}"
        puts "Global variable: #$global_var."
    end
end

obj = Classe1.new
obj.display
# puts obj.global_var

puts "(10*2)/2.5 = #{(10*2)/2.5}"

puts "\nH\se\sl\sl\so, \n\tWorl\sd!"

array = ["Anderson", true, 6521.11, 'M']

array.each do |item|
    puts item
end

puts array[0]


hashes = {
    1 => "Anderson",
    2 => "Sarah",
    3 => "Jack",
    4 => "Anne",
    5 => "Jolie"
}

puts hashes

hashes.each do |k,v|
    puts "#{k} => #{v}"
end

(7..10).each do |n|
    puts "#{n}"
end

puts "---------------------------------------------------------------------------"
puts "Ruby - Operators"

def method01
end

fname = "Anderson"
puts "fname: #{defined? fname}"
puts "lname: #{defined? lname}"
puts "method01: #{defined? method01}"
puts "method02: #{defined? method02}"
puts "super: #{defined? super}"


CONTADOR = 10
module MyModule
    ::CONTADOR = 33
    CONTADOR = 20
    def display
        puts "Metodo dentro do módulo."
    end
end

puts CONTADOR
puts MyModule::CONTADOR
MyModule::display()

puts "---------------------------------------------------------------------------"
puts "Ruby - Comments"

# comentário 01

=begin
comentário 02
=end

puts "---------------------------------------------------------------------------"
puts "Ruby - if...else, case, unless"

age = 14

if age > 0
    if age > 18
        puts "Adulto"
    elsif (age < 18) and (age > 13)
        puts "Adolescente"
    else
        puts "Criança"
    end
else
    puts "Idade inválida"
end


number = -1
unless number >= 0
    puts "Positivo"
else
    puts "Negativo"
end 

$variable = false
print "Valor atribuído!" if $variable
print "Valor não atribuído!" unless $variable

$opc = 7
case $opc
when 1
    puts "Opção 01"
when 2 .. 4
    puts "Opção 02"
when 5
    puts "Opção 03"
when 8 .. 9
    puts "Opção 04"
else
    puts "Opção inválida"
end

puts "---------------------------------------------------------------------------"
puts "Ruby - Loops"

=begin
cont = 0
while cont < 10 do
    puts cont++
end
=end

=begin
$i = 0
begin
    puts $i++
while $i < 10
=end

=begin
$i = 0
$num = 5
until $i > $num  do
   puts("Inside the loop i = #$i" )
   $i +=1;
end
=end

=begin
$i = 0
begin
    puts $i++
end until $i < 10
=end

def teste01
    i = 0
    for i in 0..5
        puts i
    end
end

teste01

puts "---------------------------------------------------------------------------"
puts "Ruby - Methods"

def soma(num1=15, num2=25)
    num1 + num2
end

def method(*params)
    puts params
end

puts soma 25, 15

method 1, 5541.11, true, "Anderson", 'M'

class MyClass
    def privado
        puts "Privado"
    end
    def MyClass.publico
        puts "Publico"
    end
end

obj = MyClass.new
obj.privado
MyClass.publico

def greeting(name)
    puts "Hello, #{name}!"
end

'''
alias greeting saudacao
saudacao "Anderson"
'''

greeting "Anderson"

undef greeting

greeting "Anderson"

