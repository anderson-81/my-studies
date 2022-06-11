time = Time.new
puts time.inspect

birthday = Time.local(1981,11,12)
puts "#{birthday.day}/#{birthday.month}/#{birthday.year}"

puts "\n----------\n#{time.to_a}" 

puts "Birthday: #{birthday.strftime("%d/%m/%Y")}"
