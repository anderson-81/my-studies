puts "---------------------------------------------------------------------------"
puts "Ruby - Iterators"

numbers = Array[
    5,6,4,7,3,8,2,9,1,0
]

person = Hash[
    "id" => 123,
    "Name" => "Anderson",
    "Birthday" => Time.new(1981,11,12).strftime("%d/%m/%y"),
    "Gender" => 'M',
    "Salary" => 3212.11,
    "Status" => true
]

i = 0
numbers.each do |n|
    puts "[#{i}] => #{n}"
    i = i + 1   
end

person.each do |k,v|
    puts "#{k}: #{v}"
end

puts "\n\nCollect:"
i = 0
result = numbers.collect{
    |i| i * 3
}
result.each do |n|
    puts "[#{i}] => #{n}"
    i = i + 1   
end

puts "\n\nCollect com Hash:"
person.collect{
    |k,v| puts("#{k}: #{v}")
}

