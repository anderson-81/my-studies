puts "---------------------------------------------------------------------------"
puts "Ruby - Blocks"

def testblock1
    puts "1 - Antes do yield."
    yield
    puts "2 - Após do yield."
end
testblock1 { puts "Hello, World! "}


def testblock2
    puts "1 - Antes do yield."
    yield 12
    yield 11
    puts "2 - Meio."
    yield 11
    puts "3 - Final do yield."
end
testblock2 { |i| puts "#{i}" }

def testblock3
    puts "\n\nDados de Funcionário:"
    yield "ID", 123
    yield "Name", "Anderson"
    yield "Birthday", "12/11/1981"
    yield "Salary", 4321.11
    yield "Gender", "\'M\'"
end
testblock3 { |f,v| puts "#{f}: #{v}"}

puts "---------------------------------------------------------------------------"
puts "Ruby - Modules and Mixins"

$LOAD_PATH << '.'
require 'module1.rb'
puts Module1.greeting("Anderson")

