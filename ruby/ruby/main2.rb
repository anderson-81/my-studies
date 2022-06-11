puts "\nWhile:"

i = 0
while i < 10 do
    puts i  
    i = i + 1
end

puts "\nDo.. While:"

i = 0
begin
    puts i  
    i = i + 1
end while i < 10

puts "\nFor:"

i = 0
for i in 0..5 do
    puts i  
end

puts "\nUntil:"

i = 10
begin
    puts i  
    i = i - 1 
end until i < 10 

puts "\nEach:"

(0..9).each do |i|
    puts "#{i}"  
end

puts "\nBreak:"

(0..1000).each do |i|
    if i == 10
        break
    end
    puts "#{i}"  
end

puts "\nContinue:"

(0..1000).each do |i|
    if i == 5
        puts "X"  
        next
    end

    if i == 10
        break
    end
    puts "#{i}"  
end




