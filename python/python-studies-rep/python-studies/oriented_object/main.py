import datetime
import sys
import math

class Pessoa(object):
    
    #Constructor de uma classe:
    '''
    def __init__(self):
        self.codigo = 123
        self.nome = 'Anderson'
        self.dataNasc = datetime.date(1981,11,12)
        self.renda = 4500.00
    '''

    #def __init__(self, *args):
    #    self.codigo = args[0]
    #    self.nome = args[1]
    #    self.dataNasc = args[2]
    #    self.renda = args[3]
    #    self.carro = args[4]

    def __init__(self, **kwargs):
        self.codigo = kwargs['codigo']
        self.nome = kwargs['nome']
        self.dataNasc = kwargs['dataNasc']
        self.renda = kwargs['renda']
        self.carro = kwargs['carro']

    def Imprimir(self):
        print('\nDADOS CADASTRADOS: ')
        print('\nCódigo: %d' % (self.codigo))
        print('Nome: %s' % (self.nome))
        print('Data de Nascimento: %s' % (self.dataNasc))
        print('Renda: %.2f' % (self.renda))
        self.carro.Imprimir()
        
        print("\n\n\nImprimindo novamente...")
        print('\nDados sobre seu Carro: ')
        print('\nModelo: %s' % (self.carro.modelo))
        print('Ano: %d' % (self.carro.ano))
        print('Preço: %.2f' % (self.carro.preco))
        
        print('\n************************************************\n\n')


class Carro(object):
    
    def __init__(self, **kwargs):
        self.modelo = kwargs['modelo']
        self.ano = kwargs['ano']
        self.preco = kwargs['preco']

    def Imprimir(self):
        print('\nDados sobre seu Carro: ')
        print('\nModelo: %s' % (self.modelo))
        print('Ano: %d' % (self.ano))
        print('Preço: %.2f' % (self.preco))
        
#Criando objeto carro para ser atribuido.
carro = Carro(modelo="S10", ano=1998, preco=8000)

#Duas formas de Instanciar, por tupla ou dicionário:
#pessoa = Pessoa(123, 'Anderson', datetime.date(1981,11,12), 4500.00, carro)
pessoa = Pessoa(codigo=123, nome='Anderson', dataNasc=datetime.date(1981,11,12), renda=4500.00, carro=carro)

pessoa.Imprimir()

#Posso acessar diretamente o atributo nessa classe.
print("Nome: %s" % (pessoa.nome))

#Criando novo atributo.
pessoa.sobrenome = 'Conceição'
print("Sobrenome: %s" % (pessoa.sobrenome))

#Imprimindo o modelo do carro atribuido(Atribudo e um "atributo"):
print("Modelo: %s" % (pessoa.carro.modelo))

print("\n\n\n")

print('\n************************************************\n\n')

print("Dicionário e Classe:")

Cliente = {'nome' : 'Mara', 'dataNasc' : datetime.date(1959,6,8), 'renda' : 5000.50}
print(type(Cliente))
print(Cliente.__init__)

class Cliente(object):
    pass        

cli = Cliente()
cli.nome = 'Mara'
cli.dataNas = datetime.date(1959,6,8)
cli.renda = 5000.50
print(type(cli))
print(cli.__init__)

print('\n************************************************\n\n')

