puts "---------------------------------------------------------------------------"
puts "Ruby - Ranges"

puts (0..5).to_a
# puts ("Hello".."Hello").to_a
puts ('a'..'z').to_a
puts ('bar'..'bat').to_a

digits = (0..9)

puts digits.include? 5 # Possui 5? true.

puts digits.min

puts digits.max

result = digits.reject{
    |i| ((i % 2) == 0)
}
puts result.to_a


puts "------------------------"

value = 6
if((1..10) === value)
    puts "#{value} está contido no range!"
end