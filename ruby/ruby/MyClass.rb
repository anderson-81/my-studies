$LOAD_PATH << '.'
require "module2"

class Calc
    include Module2
    def initialize
        Module2.display()
    end
end

obj = MyClass.new