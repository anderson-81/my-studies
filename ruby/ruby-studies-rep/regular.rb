def Valido?(email)
  if (email =~ /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i) == 0
  	true
  else
  	false
  end
end

puts Valido?("email@teste.xxx")
puts Valido?("teste")
puts Valido?("@teste.xxx")
puts Valido?(25)
puts Valido?("http://")
puts Valido?("")
puts Valido?("email@teste.yyy")

