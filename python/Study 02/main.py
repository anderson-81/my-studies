from tokenize import Number

print("Hello, World!")

def greeting01():
    nome = input("Nome:")
    print("Hello, " + nome + "!")

def greeting02():
    # nome = raw_input("Nome:")
    # print("Hello, " + nome + "!")
    return

def frange():
    print(range(0, 33, 3))

    print(list(range(0, 33, 3)))

    for n in range(0, 33, 3):
        print(n)
    return

def NumbersVar():
    num1 = 3
    num2 = 3.5
    num3 = 3.4 + 2.3j
    print(type(num1))
    print(type(num2))
    print(type(num3))
    return

def fString():
    str = "Hello, World!"
    print(str)
    print(str[3])
    print(str[:3])
    print(str[3:])
    print(str * 2)
    print(str[:7] + "World!")

def fList():
    list = [True, 'A', "Anderson", (3 + 3j), ["green", "yellow"],  {'1':"Anderson"}, (1,2,3)]
    print(list)
    print(list[3])
    print(list[:3])
    print(list[3:])
    print(list * 2)
    print(list[:7] + [1,2,3])

def ftuple():
    tuple = (True, 'A', "Anderson", (3 + 3j), ["green", "yellow"],  {'1':"Anderson"}, (1,2,3))
    print(tuple)
    print(tuple[3])
    print(tuple[:3])
    print(tuple[3:])
    print(tuple * 2)
    print(tuple[:7] + (1,2,3))

def fdict():
    dict = {1 : True, 2: 'A', 3:"Anderson", 4 : (3 + 3j), 5 : ["green", "yellow"],  6 : {'1':"Anderson"}, 7 : (1,2,3)}
    print (dict.keys())
    print (dict.values())
    print (dict[3])

def conversions():
    print (int(7.5))
    print(float(7.54321534253))
    print(complex(3 + 5j))
    print(str("5"))
    print(repr(2))
    # print(eval("jashgdh")) # Objeto para string
    print(tuple([1,2,3]))
    print(list((1,2,3)))
    # print(set(2))
    # print(dict({"1":"people01"},{"2":"people02"},{"3":"people03"}))
    # print(frozenset())
    print(chr(97))
    # print(str(unichr(96)))
    print(ord('1'))
    print(hex(16))
    print(oct(16))

def fdecision(num):
    if num != 0:
        if num < 0:
            print('Menor que zero')
        elif num > 0:
            print('Maior que zero')
    else:
        print("Zero")

def floop():
    cont = 0
    while cont < 10:
        print(cont)
        cont = cont + 1

    for n in range(0, 34, 3):
        print(n)

    print("\n\For aninhado:")

    list = [[3,6,8],[4,7,0],[-1,3,5]]
    for x in range(len(list)):
        for y in range(len(list[x])):
            print("[%d,%d] = %d" % ((x + 1), (y + 1), list[x][y]))

    print("\n\nWhile aninhado:")
    x = y = 0
    while x < len(list):
        while y < len(list[x]):
            print("[%d,%d] = %d" % ((x + 1), (y + 1), list[x][y]))
            y = y + 1
        x = x + 1
        y = 0
    return



def numberconvert():
    x = 33
    y = 3j
    print(int(x))
    # print(long(x))
    print(float(x))
    print(complex(x))
    print(complex(x, y))
    return

def fstring():
    str = "Hello, World!"
    print(str)
    print(str[3])
    print(str[:3])
    print(str[3:])
    print(str * 2)
    print(str[:7] + "World!")
    print(r'C:\\Windows')
    print('C:\\Windows')
    return

def flist():
    vlist = ['Anderson', 'Sarah', 'Anne', 'Lucy', 'Tiffany', 'Anne']

    print(vlist)

    vlist[0] = 'Gina'

    print(vlist)

    print(vlist[0])
    print(vlist[:1])
    print(vlist[3:])

    for i in range(len(vlist)):
        print(vlist[i])

    for p in vlist:
        print(p)

    print("Quantidade: %d" % (len(vlist)))
    print("Máximo: %s" % (max(vlist)))
    print("Mínimo: %s" % (min(vlist)))
    print(list(('hdgsjhdgasjh', 'jhgsteuw', 'uywuyeuw', 'jasdodasldl')))

    print(list.count(vlist, 'Anne'))
    # print(vlist.index(1))
    print(vlist.append('Jacque'))
    # print(list.extend(vlist))
    print(list.insert(vlist, 6, 'Ava'))
    print(vlist.remove('Sarah'))
    # print(vlist.pop(obj = vlist[-1]))

    print(vlist.reverse())
    print(vlist)

    print(vlist.sort())
    print(vlist)

    del vlist

    try:
        print(vlist)
    except Exception as e:
        print('Lista já não está mais referenciada.')
    return

def ftuples():
    vtuple = ['hdsghdgs', 'jhdasjhdsj', 'klakldsakds', 'bcxvbcxv', 'gdsfgdfsgdas', 'rweqrewqr']
    print(len(tuple(vtuple)))
    print(max(tuple(vtuple)))
    print(min(tuple(vtuple)))

def fdict():
    dict = {1:'Anderson', 2:'Sarah', 3:'Anne', 4:'Lucy', 5:'Tiffany', 6:'Anne'}
    dict[7] = 'Ava'
    print(dict)

    print(len(dict))
    print(str(dict))
    print(type(dict))

    dict2 = dict.copy()
    print(dict2)

    dict3 = {8:'Will'}
    dict2.update(dict3)
    print(dict2)

    print('Registro 1: %s' %(dict.get(1)))

    # dict.setdefault(dict, default = None)
    # print(dict)

    # dict.fromkeys()

    # print(dict.has_key(1))
    print(dict.items())
    print(dict.keys())
    print(dict.values())

    dict.clear

    del dict

    try:
        print(dict)
    except Exception as e:
        print('Dicionário já não está mais referenciado.')
    return

def ftime():
    import time; 

    print('Aguardando...')
    time.sleep(2)

    print(time.localtime())
    print("%d:%d:%d" %(time.localtime().tm_hour, time.localtime().tm_min, time.localtime().tm_sec))

    import calendar
    cal = calendar.month(1981, 11, 12)
    print(cal)

    # print(time.clock())

    t = (2015, 12, 31, 10, 39, 45, 1, 48, 0)
    t = time.mktime(t)
    print (time.strftime("%b %d %Y %H:%M:%S", time.localtime(t)))

    struct_time = time.strptime("30 12 2015", "%d %m %Y")
    print ("tuple : ", struct_time)

    print(time.timezone)
    print(time.tzname)

    return

def function01(*numeros):
    for x in numeros:
        print(x)
    return

def function02():
    num1 = 15
    num2 = 25
    sum = lambda num1, num2: num1 + num2
    print("%d + %d = %d" %(num1, num2,(sum(num1, num2))))
    return

def function03(name):
    print("Hello, %s !" %(name))
    return

def usarModulo01():
    import support
    support.greeting("Anderson")
    reload(support)
    support.greeting("Anderson")
    return

def usarModulo02():
    from support import greeting
    greeting("Anderson")
    return

def file01():
    file = open('lorem.txt')
    print("name: %s" %(file.name))
    print("mode: %s" %(file.mode))
    print("closed: %s" %(file.closed))
    return

def fwrite():
    try:
        import os
        if os.path.exists('file.txt'):
            os.remove('file.txt')
        file = open("file.txt", "w+")

        file.write("Hello, World!")

        print('Posição atual: %d' %(file.tell()))

        position = file.seek(0, 0)

        print('Posição atual: %d' %(file.tell()))

        file.write("Olá, Mundo!")

        file.close()
    except Exception as ex:
        print(ex.args)
    return


    

def fread():
    try:
        file = open('file.txt', "+r")
        print(file.read())
        # print(file.read(10))
        file.close()
    except Exception as ex:
        print(ex.args)
    return

def file02():
    fwrite()
    fread()
    return

def file03():
    import os
    if os.path.exists("MyDir"):
        os.rmdir("MyDir")
    os.mkdir("MyDir")    
    print("current dir: %s" %(os.getcwd()))
    # os.chdir("newdir")
    return

def ExceptionsHandling01():
    try:
        file = open("data.txt", "r+")
    except IOError as ex:
        print(ex.args)
    else:
        file.close()
        print("Execução correta!")
    finally:
        print("Tudo finalizado.")
    return

def divisionException(num1, num2):
    if (num1 == 0) or (num2 == 0):
        raise Exception("Exceção lançada.") 
    else:
        print(num1/num2)
    return
    
def ExceptionsHandling02():
    try:
        divisionException(10, 2)
    except Exception as ex:
        print(ex.args)
    return

class MyException(RuntimeError):
    def __init__(self, arg):
        self.args = arg

def ExceptionsHandling03():
    try:
        raise MyException("Erro encontrado.")
    except MyException as e:
        print(e.args)
    return

# greeting01()
# greeting02()
# frange()
# input("Pressione para terminar...")
# NumbersVar()
# fString()
# fList()
# ftuple()
# fdict()
# fconversion()
# fdecision(-1)
# floop()
# conversions()
# numberconvert()
# fstring()
# flist()
# ftuples()
# fdict()
# ftime()
# function01(0,5,6,7,9,8,3,2,1)
# function02()
# function03(name="Anderson")
# usarModulo01()
# usarModulo02()
# file01()
# file02()
# file03()
# ExceptionsHandling01()
# ExceptionsHandling02()
# ExceptionsHandling03()






