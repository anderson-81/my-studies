puts "---------------------------------------------------------------------------"
puts "Ruby - Hashes"

hash1 = Hash.new
puts hash1

puts "---------------------------------------------------------------------------"

hash2 = Hash.new("data")
puts hash2[0]
puts hash2[1]

puts "---------------------------------------------------------------------------"

person = Hash[
    "ID" => 123, 
    "Name" => "Anderson",
    "Salary" => 4321.11,
    "Gender" => 'M'
    # ["Address", "Street"] => "Street, 20."
]

puts person
puts person['Name']
# puts person['Address']
puts person.keys
puts person.values

puts "\n\nKey Pair/Value:"
person.each do |k,v|
    puts "#{k}: #{v}"
end

puts "---------------------------------------------------------------------------"





