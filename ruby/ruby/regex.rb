email = "yhdsudyueqw"
VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

if email.match? VALID_EMAIL_REGEX
    puts "E-mail válido."
else
    puts "E-mail inválido."    
end

message1= "Hello, Mundo!"
message2 = message1.gsub("Hello", "Olá") # sem exclamação (!), faço uma cópia do objeto.
puts message2
message1.gsub!("Hello", "Olá") # com exclamação (!), altero o próprio objeto.
puts message1