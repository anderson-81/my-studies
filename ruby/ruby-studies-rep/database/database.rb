require 'sqlite3'

'''
begin
	#Conexão
	db = SQLite3::Database.new "dbTeste.db"
	puts "Conectado."

	#Consulta
	puts "\n\nIMPRESSÃO 01"
	retorno = db.execute("SELECT * FROM CLIENTE") 
	puts "#{retorno}"

	puts "\n\nIMPRESSÃO 02"
	puts retorno

	puts "\n\nIMPRESSÃO 03"
	retorno.each do |row|
		puts "#{row[0]} --- #{row[1]}"
	end
rescue SQLite3::Exception => e
	puts "Houve um erro."
	puts e
ensure
	db.close if db
	puts "\n\nDesconectado."
end
'''

class Conexao
	def self.Conectar
		begin
			db = SQLite3::Database.new "dbTeste.db"
			db
		rescue SQLite3::Exception => e
			puts "Erro ao conectar."
			puts e
		end
	end
end

class Cadastro
	def self.Incluir(codigo, nome)
		begin
			db = Conexao.Conectar
			db.transaction
			db.execute("INSERT INTO CLIENTE (codigo, nome) VALUES (#{codigo}, '#{nome}')")
			db.commit
			puts "Cliente incluido com sucesso."
		rescue SQLite3::Exception => e
			db.rollback
			puts "Erro ao incluir registro de Cliente."
			puts e
		ensure
			db.close
		end
	end

	def self.Editar(codigo, nome)
		begin
			db = Conexao.Conectar
			db.transaction
			db.execute("UPDATE CLIENTE SET NOME = '#{nome}' WHERE CODIGO = #{codigo}")
			db.commit
			puts "Cliente editado com sucesso."
		rescue SQLite3::Exception => e
			db.rollback
			puts "Erro ao editar registro de Cliente."
			puts e
		ensure
			db.close
		end
	end

	def self.Excluir(codigo)
		begin
			db = Conexao.Conectar
			db.transaction
			db.execute("DELETE FROM CLIENTE WHERE codigo = #{codigo}")
			db.commit
			puts "Cliente excluído com sucesso."
		rescue SQLite3::Exception => e
			db.rollback
			puts "Erro ao excluir registro de Cliente."
			puts e
		ensure
			db.close
		end
	end

	def self.GetClienteForCodigo(codigo)
		begin
			db = Conexao.Conectar
			result = db.execute("SELECT * FROM CLIENTE WHERE codigo = #{codigo}")
			result.each do |row|
				puts "#{row[0]} -- #{row[1]}"
			end
		rescue SQLite3::Exception => e
			puts "Erro ao excluir registro de Cliente."
			puts e
		ensure
			db.close
		end
	end

	def self.GetClienteForName(nome)
		begin
			db = Conexao.Conectar
			result = db.execute("SELECT * FROM CLIENTE WHERE nome LIKE '#{nome}%'")
			result.each do |row|
				puts "#{row[0]} -- #{row[1]}"
			end
		rescue SQLite3::Exception => e
			puts "Erro ao excluir registro de Cliente."
			puts e
		ensure
			db.close
		end
	end
end

Cadastro.Incluir(555,'Joana')
Cadastro.GetClienteForCodigo(555)
Cadastro.Editar(555,'Joana Maria')
Cadastro.GetClienteForCodigo(555)
Cadastro.Excluir(555)
Cadastro.GetClienteForName("")




