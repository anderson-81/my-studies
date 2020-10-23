-- Tabelas possuem estados.
-- Tabelas possuem identidade única.

person1 = { 
    name = 'Anderson',
    email = 'anderson@asdfg.com',
    salary = 5432.11,
    birthday = os.time{year = 1981, month = 11, day = 12},
    gender = 'M'
}

-- Trabalhando com data:
print(os.date("%x", person1.birthday))

-- Identidade única:
print(person1)

person1.name = "Anderson Conceição"

print(person1)

-- Verificando se sao objetos diferentes:

person2 = { 
    name = 'Maria',
    email = 'maria@asdfg.com',
    salary = 1111.11,
    birthday = os.time{year = 1975, month = 01, day = 13},
    gender = 'F'
}

-- Mostrando a identidade dos dois objetos (tabelas)
print(assert(person1, person2))

-- Comparando objetos (tabelas)
print(person1 == person2)

-- Simulação de orientação a objetos.


