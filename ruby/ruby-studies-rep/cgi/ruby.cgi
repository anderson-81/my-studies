#!/ruby/bin/ruby
require 'cgi'

cgi = CGI.new

codigo = cgi['codigo']
nome = cgi['nome']

puts cgi.header
puts "#{codigo} --- #{nome}"

