puts "---------------------------------------------------------------------------"
puts "Ruby - File I/O"

puts "\n\n"

puts "Hello, World!"
putc "Hello, World!"

puts "\n\n"
=begin
puts "\n\nWhat's your name?"
name = gets
puts "Hello, #{name}!"
=end
puts "\n\n"

print "Hello World"
print "Good Morning"

puts "\n\n"

class WriteRead01
    def initialize
    end

    def write
        file = File.new("file.txt", "r+")
        file.syswrite("Hello, World!")
        file.close
    end

    def read
        file = File.new("file.txt", "r")
        puts file.sysread
        file.close
    end
end

class WriteRead02
    def initialize
    end

    def write
        File.open("file.txt", "r+") do |aFile|
            aFile.syswrite("Hello, World!")  
            aFile.close  
        end
    end

    def read
        File.open("file.txt", "r") do |aFile|
            puts aFile.sysread  
            aFile.close  
        end
    end
end

'''
obj1 = WriteRead01.new
obj1.write
obj1.read
'''

obj2 = WriteRead02.new
obj2.write
obj2.read
