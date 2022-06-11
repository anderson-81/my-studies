begin
    puts "Hello, World!"
rescue
    retry
end

'''
for i in 0..5
    puts "Value of local variable is #{i}"
    retry if i == 1
end
'''
