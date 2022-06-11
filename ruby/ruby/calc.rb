$LOAD_PATH << '.'
require 'calcmodule'

class Calc
    include CalcModule
    def initialize(num1, num2)
        @num1 = num1
        @num2 = num2
    end
    def sum
        return CalcModule.sum @num1, @num2
    end
end