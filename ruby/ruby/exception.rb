puts "---------------------------------------------------------------------------"
puts "Ruby - Exceptions"


num1 = 2
num2 = 0

begin
    result = num1/num2        
rescue => ZeroDivisionError
    puts "Divisão por zero."
ensure
    puts "Bloco 01 finalizado."
end

puts "---------------------------------------------------------------------------"

begin
    result = num1/num2        
rescue => e
    puts "#{e}"
    puts "#{e.backtrace.inspect}"
ensure
    puts "Bloco 02 finalizado."
end

puts "---------------------------------------------------------------------------"

begin
    result = num1/num2        
rescue Exception => e
    puts e.message
    puts e.backtrace.inspect
ensure
    puts "Bloco 03 finalizado."
end

puts "---------------------------------------------------------------------------"

num2 = 5
begin
    result = num1/num2        
rescue Exception => e
    puts e.message
else
    # Execução se não houver exceção.
    puts "Sem erro de execução."
ensure
    puts "Bloco 03 finalizado."
end

puts "---------------------------------------------------------------------------"

=begin
catch :lancar do
    puts "Exceção lançada."
end

cont = 0
while cont < 1000
    throw :lancar if cont == 5
    cont = cont + 1
end
=end

puts "---------------------------------------------------------------------------"

class DivisaoPorZero < StandardError
    attr_reader :reason
    def initialize(msg="Divisão por zero", reason="Calculo")
        @reason = reason
        super(msg)
    end
end

def dividir(num1, num2)
    if num2 == 0
        raise DivisaoPorZero.new("Divisão por zero.", "Calculadora")
    else
        puts num1/num2
    end
end

dividir 33, 0





