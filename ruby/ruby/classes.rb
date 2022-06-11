puts "---------------------------------------------------------------------------"
puts "Ruby - Object Oriented"

class ClassePai
    @@cont = 0
    def initialize
        @@cont = @@cont + 1    
    end
    def ClassePai.method01
        puts "Método de Classe."
    end
    def ClassePai.getcont
        return @@cont
    end
    def method02
        puts "Método de instancia."
    end
    def method03
        puts "Método protegido."
    end
    def method04
        puts "Método privado."
    end
    def to_s
        return "Redefinindo o método de string."
    end
    protected :method03
    private :method04
end

obj = nil
for i in 0..100 do
    obj = ClassePai.new
end

puts ClassePai.getcont
puts ClassePai.method01
puts obj.method02
puts obj.to_s
# puts obj.method03
# puts obj.method04


class ClasseFilho < ClassePai
    def initialize
    end
    def method02
        puts "Método da ClasseFilho."
    end
end

obj1 = ClasseFilho.new
obj1.method02


class Rectangle
    PI = 3.1415926535
    def initialize(w, h)
        @w, @h = w, h
    end
    def +(other)
        Rectangle.new(@w + other.getw, @h + other.geth)
    end
    def -(other)
        Rectangle.new(@w - other.getw, @h - other.geth)
    end
    def *(other)
        Rectangle.new(@w * other.getw, @h * other.geth)
    end
    def /(other)
        Rectangle.new(@w / other.getw, @h / other.geth)
    end
    def to_s
        return "Width: #{@w} | Height: #{@h}"
    end
    def getw
        @w
    end
    def geth
        @h
    end
    def method
        puts "Não faz nada!"
    end
end

r1 = Rectangle.new 640, 480
r2 = Rectangle.new 480, 240
puts r1 + r2
puts r1 - r2
puts r1 * r2
puts r1 / r2

r3 = Rectangle.allocate
r3.method

puts Rectangle::PI

r1.freeze
if r1.frozen?
    puts "Objeto congelado."
else
    puts "Objeto liberado."
end






