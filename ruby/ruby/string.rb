puts "---------------------------------------------------------------------------"
puts "Ruby - Strings"

puts "#{'Hello, World!'}"

=begin
puts "%Q{Hello, World!}"
puts "%q[Ruby is fun.]" 
=end

message = String.new("\n\nHello, World!")
puts message.downcase
puts message.capitalize!
puts message.dump
puts message.empty?
puts message.hex
puts message.replace "Olá, Mundo!"
puts message.upcase
puts message.reverse
puts message.length
puts message.hash
puts message.eql? "Hello, World!"
puts message.downcase!

=begin
puts "%{Ruby is fun.}"
puts "%Q{ Ruby is fun. }"
puts "%q[Ruby is fun.]"
puts "%x!ls!"
=end