class MeuServico < SOAP::RPC::StandaloneServer
   def Somar(valor1, valor2)
      return a + b
   end
   def Saudar(nome) 
      return "Hello, #{nome}!!!"
   end
end

servico = MyServer.new('MeuServico','urn:ruby:servico', 'localhost', 8080)
servico.start