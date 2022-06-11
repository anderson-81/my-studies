import re
from asyncio.windows_events import NULL
from email.mime import base

import MySQLdb


class Person:
    'Documentação da classe People.'
    cont = 0

    def __init__(self, id, name):
        self.id = id
        self.name = name
        Person.cont += 1

    def __del__(self):
        print("Objeto destruído.")


class PhysicalPerson(Person):
    def __init__(self, id, name, cpf):
        self.id = id
        self.name = name
        self.cpf = cpf

    def __del__(self):
        print("PhysicalPerson destruído")

    def __str__(self):
        return ("ID: %d | Name: %s | CPF: %s " % (self.id, self.name, self.cpf))


for i in range(0, 10):
    p = Person(1, "Anderson")

print("Quantidade: %d" % (Person.cont))

p1 = Person(1, "Anderson")
print("ID: %d | Name: %s" % (p1.id, p1.name))
print("ID: %d | Name: %s" % (getattr(p1, "id"), getattr(p1, "name")))

setattr(p1, "name", "Anderson C.")
print("ID: %d | Name: %s" % (getattr(p1, "id"), getattr(p1, "name")))

delattr(p1, "id")

try:
    print("ID: %d | Name: %s" % (getattr(p1, "id"), getattr(p1, "name")))
except:
    print("ID não mais definido.")

# informações sobre a classe:

print(Person.__doc__)
print(Person.__name__)
print(Person.__module__)
print(Person.__bases__)
print(Person.__dict__)

# Não usa o objeto?

print("Tem salario? %s" % hasattr(p1, "salary"))

del Person

# NameError: name 'Person' is not defined
# print("Quantidade: %d" %(Person.cont))

pp = PhysicalPerson(123, "Anderson", "42376543211")
print(pp.__str__())


class Classe:
    __privateAttr = "Atributo oculto"
    __contador = 0

    def __init__(self, num):
        self.num = num
        self.__contador += 1

    def __add__(self, other):
        return Classe(self.num + other.num)

    def getCount(self):
        print(self.__contador)


c1 = Classe(10)
c2 = Classe(30)
print((c1 + c2).num)
print(c1.getCount())

# AttributeError: 'Classe' object has no attribute '__privateAttr'
# print(c1.__privateAttr)


def regex():
    email = "abdhdhasg@hsjhdjshds.com"
    pattner = "/(^$|^.*@.*\..*$)/"
    result = re.match(pattner, email, re.U | re.IGNORECASE)
    print("retorno: %s" % (result))


regex()


