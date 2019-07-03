class Pessoa(object):
    
    def __init__(self, **kwargs):
        self.nome = kwargs['nome']
        self.renda = kwargs['renda']

    def Imprimir(self):
        print(self.nome)
        print(self.renda)
    
    def __le__(self, other):
        return self.renda <= other.renda

    def __eq__(self, other):
        return self.renda == other.renda

    def __ge__(self, other):
        return self.renda >= other.renda

    def __lt__(self, other):
        return self.renda < other.renda

    def __gt__(self, other):
        return self.renda > other.renda
    
    def __ne__(self, other):
        return self.renda != other.renda



p1 = Pessoa(nome='Anderson', renda=4500)
p2 = Pessoa(nome='Mara', renda=5000)

#Sobrecarga de operadores:
print(p1 <= p2)
print(p1 == p2)
print(p1 >= p2)
print(p1 < p2)
print(p1 > p2)
print(p1 != p2)
