function iowrite()
    io.write("Hello, World!")
    io.write('Hello, World!', 123, "\n", _VERSION)
    
    print('\n')
end

function swapvalue()
    local a
    local b

    a = 33
    b = 77

    print('a = ' .. a)
    print('b = ' .. b)

    a,b = b,a

    print('a = ' .. a)
    print('b = ' .. b)
end

function gettype()

    show = function()
        print('Hello, World!')
    end

    print(type("Anderson"))
    print(type(type(nil)))
    print(type(nil))
    print(4.11)
    print('M')
    print(true)
    print(type(os.time{year = 1981, month = 11, day = 12}))
    print(123)
    print(type(show))
end

function operators()
    print('2+8 = ' .. 2 + 8)
    print('2-8 = ' .. 2 - 8)
    print('2*8 = ' .. 2 * 8)
    print('2/8 = ' .. 2 / 8)
    print('2%8 = ' .. 2 % 8)
    print('2^8 = ' .. 2 ^ 8)
    print(' -8 = ' .. -8)
end

function relational()
    print(33 == 77)
    print(33 ~= 77)
    print(33 >= 77)
    print(33 <= 77)
    print(33 > 77)
    print(33 < 77)
end

function logical()
    print(true or false)
    print(true and false)
    print(not true)
end

function misc()
    print(#'Hello')
    print('Hello, ' .. 'Anderson' .. '!')
end

-- iowrite()

-- swapvalue()

-- gettype()

-- operators()

-- relational()

-- logical()

-- misc()

function while01()
    i = 0
    while i < 100 do
        if(i == 10) then
            break
        end
        print(i)
        i = i + 1
    end
end

-- while01()

function while02()
    i = 0
    while i < 10 do
        if(i == 5) then
            print('X')
            ::continue::
            i = i + 1
        end
        print(i)
        i = i + 1
    end
end

-- while02()

function toexecute(f)
end

function greeting(name)
    print('Hello, ' .. name .. '!')
end

-- toexecute(greeting('Anderson'))

-- funções string (biblioteca)

function strf()
    print('Char \'A\' with number: ' .. string.byte("A"))

    print(string.len('Hello, World!'))
    
    print(string.upper('Hello, World!'))
    
    print(string.lower('Hello, World!'))
    
    print(string.reverse('Hello, World!'))
    
    print(string.gsub('Hello, World!', 'World!', 'Mundo!'))
end

-- strf()


function matrix()

    l = 3
    c = 2
   
    mat = {}

    -- Criando array:
    for x = 0, c, 1 do
        mat[x] = {}
        for y = 0, l, 1 do
            mat[x][y] = x * y
        end
    end

    -- Imprimindo o array:
    for x = 0, c, 1 do
        for y = 0, l, 1 do
           print('[' .. (x + 1) .. ',' .. (y + 1) .. '] = ' .. mat[x][y])
        end
    end
end

-- matrix()

function finterator()
    colors = {'green','yellow','blue','white','red'}

    for i, v in ipairs(colors) do
        print(i,v)
    end
end

-- finterator()

-----------------------------------------

-- TABLE

function ftable()
    vetor = {}
    print('tipo do campo: ' ..type(vetor))
    
    vetor1 = {'Pessoa 01', 111, true, 3333}
    vetor2 = {'Pessoa 02', 222, false, 7777}
    
    fruits = {"banana","orange","apple"}
    print(table.concat(fruits, ", "))
    print(table.concat(fruits, ", ", 2, 3))
    
    table.insert(fruits, 'Watermelon'); -- inserindo
    
    print(table.concat(fruits, ", ")) -- uma forma de listar por um print.
    
    table.remove(fruits, 1) -- removendo o primeiro item.
    
    print(table.concat(fruits, ", ")) -- uma forma de listar por um print.
    
    table.sort(fruits)
    
    print(table.concat(fruits, ", ")) -- uma forma de listar por um print.
    
    -- print(table.maxn(fruits))
    
    print("------------------------------")
    
    for k,v in pairs(fruits) do
        print(k,v)
    end
    
    print("------------------------------")
end

-- ftable()

-----------------------------------------

-- modules

function fmodules()
    local mymodule = require("mymodule")
    mymodule.greeting("Mara")
    
    local calc = require("calc")
    print('3 + 3 = ' .. calc.somar(3,3))
    print('3 - 3 = ' .. calc.subtrair(3,3))
    print('3 * 3 = ' .. calc.multiplicar(3,3))
    print('3 / 3 = ' .. calc.dividir(3,3))
    print('3 % 3 = ' .. calc.modular(3,3))
end

-- fmodules()

-----------------------------------------

-- Metatables

-----------------------------------------

-- Coroutines

-----------------------------------------

-- File I/O

-- Criando arquivo:
function file01()
    file = io.open("file.txt", "w")
    io.close(file)
end

-- Anexando dados:
function file02()
    file = io.open("file.txt", "a")
    file:write("Hello, World!");
    io.close(file)
end

-- Lendo arquivo:
function file03()
    file = io.open("file.txt", "r")
    data = file:read()
    print(data)
end

-- file01()
-- file02()
-- file03()

-----------------------------------------

-- Error Handling

-- Manipulação de erro 01 (pcall):

function fpcall()
    function myfunction ()
        n = 1/nil
     end
     
     if pcall(myfunction) then
        print("Success")
     else
        print("Failure")
     end
end

-- Manipulação de erro 02 (xpcall):

function fxpcall()

    function myfunction()
        n = 1/nil
    end

    function errorHandler(err)
        print('Error: ' ..err)
    end

    status = xpcall(myfunction, errorHandler)
    print(status)
end

function fxpcall01()
    function dividir(num1, num2)
        return num1/num2
    end

    function errorHandler(err)
        print('error!!!')
        print('Error: ' ..err)
    end

    num1 = 10
    num2 = 0
    result, status = xpcall(dividir, errorHandler, num1, num2) -- function, errorhandler, num1, num2
    print(status)
end

-- fpcall()
-- fxpcall()

fxpcall01()

-----------------------------------------

-- Depuração

function myfunction ()
    print(debug.traceback("Stack trace"))
    print(debug.getinfo(1))
    print("Stack trace end")
 
    return 10
 end
 
 myfunction ()
 print(debug.getinfo(1))