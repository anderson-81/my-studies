def f1():
    print("Hello, world!")
    num = 3.14159
    name = "Anderson"
    lpeople = ['Anderson', 'Sarah', 'Lucy', 'Anne']
    tpeople = ('Anderson', 'Sarah', 'Lucy', 'Anne')
    colors = {
        1: 'Green',
        2: 'Yellow',
        3: 'Blue',
        4: 'White',
        5: 'Red'
    }
    del num, name, lpeople, tpeople, colors
    pass

def f2():
    people1 = ['Tiffany', 'Sarah', 'Lucy', 'Anne']
    people2 = ['Anderson', 'Jason', 'Steve']
    print(people1[:2])
    print(people1[2:3])
    print(people1 + people2)
    print(people1 * 2)
    # print(people1 + 'MARY')
    pass

def f3():
    str = 'Hello World!'
    print(str)          # Prints complete string
    print(str[0])      # Prints first character of the string
    print(str[2:5])     # Prints characters starting from 3rd to 5th
    print(str[2:])      # Prints string starting from 3rd character
    print(str * 2)      # Prints string two times
    print(str + "TEST") # Prints concatenated string
    pass

def f4():
    for item in 'Hello, world!':
        print(item)
    
    for color in ['green', 'yellow', 'blue', 'white', 'red']:
        print(color)

    for num in range(0,9):
        print(num)
    
    for num in range(9,-1,-1):
        print(num)
    
    colors = ['green', 'yellow', 'blue', 'white', 'red'] 
    for index in range(0, len(colors)):
        print(colors[index])
    
    pass

def f5():
    print("ID: %d | Name: %s" %(123,'Anderson'))
    latim = """Lorem \nipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    pariatur. \tExcepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est \nlaborum.""" 
    print(latim)
    print(u'Hello, World!')
    pass


def f6():
    colors = {
        1: 'Black',
        2: 'Red'
    }
    print(colors)
    colors.clear()
    colors = {
        1: 'Green',
        2: 'Yellow',
        3: 'Blue',
        4: 'White',
        5: 'Red'
    }
    colors[1] = 'Magenta'
    print(colors)
    del colors
    pass


def f7():
    import time
    ticks = time.time()
    print(ticks)

    localtime = time.localtime(time.time())
    print(localtime)
    print('%d/%d/%d' %(localtime.tm_mday,localtime.tm_mon,localtime.tm_year))

    asctime = time.asctime(time.localtime(time.time()))
    print(asctime)

    import calendar

    cal = calendar.month(1981, 11)
    print(cal)

    pass

def f8(id=123, name='Anderson'):
    print('ID: %d | Name: %s' %(id, name))
    pass

def f9():
    sum = lambda num1, num2: num1 + num2
    print(sum(10, 20))
    pass

def fa():
    import support
    support.greeting('Anderson')
    pass

def fb():
    from support import greeting # importando...
    greeting('Anderson')
    pass

def fc():
    # name = raw_input('Enter your name: ')
    # print(name)
    # expression = input('Enter a expression:')
    # wewqprint(expression)
    pass

def fd():
    def write():
        file = open('data.dat', 'w')
        print('Hello, World!', file) # "print to file."
        file.close()
        pass
    def read():
        file = open('data.dat', 'r')
        print(file.tell()) # current position
        print(file.read(100))
        file.seek(0,0) # Begin file position.
        print(file.read(100))
        file.close()
        pass
    write()
    read()
    pass

def fe():
    import os
    import time
    
    print('Creating file...')
    
    file = open('file.dat', 'w')
    file.close()

    print('Created!')
    
    print('Renaming file...')
    os.rename('file.dat', 'renamed.dat')

    print('Renamed!')
    
    time.sleep(5)
    print('Deleting file...')
    os.remove('renamed.dat')
    print('Deleted!')

    ###

    print('Creating folder...')
    
    os.mkdir('myfolder')
    
    print('Created!')

    # os.chdir("/files/")
    
    print(os.getcwd())

    time.sleep(5)
    
    print('Deleting folder...')
    os.rmdir('myfolder')
    print('Deleted!')

    pass

def ff():
    try:
        file = open('file.txt', 'r')
    except IOError:
        print('Input/Output error.')
    except Exception:
        print('Generic exception.')
    else:
        print(file.read(100))
        file.close()
    finally:
        print('Finished!')

    """
    def division(num1, num2):
        if(num2 == 0):
            raise Exception()
        else:
            print(num1 / num2)
        pass

    division(10, 0)
    """
    pass

def fg():
    class DivisionByZero(RuntimeError):
        def __init__(self, arg='Division By Zero !!!'):
            self.args = arg

    def division(num1, num2):
        result = 0
        try:
            # result = num1 / num2
            raise DivisionByZero("")
        except:
            raise DivisionByZero("")
        else:
            print(result)
        
        if(num2 == 0):
            # raise DivisionByZero()
            pass
        else:
            print("%d / %d = %f" %(num1, num2, (num1 / num2)))
        pass

    division(10, 0)  

f1()
f2()
f3()
f4()
f5()
f6()
f7()
f8()
f9()
fa()
fb()
fc()
fd()
# fe()
ff()
# fg()

# ********************************************************************** #
#                               ADVANCED                                 #
# ********************************************************************** #


    
        





