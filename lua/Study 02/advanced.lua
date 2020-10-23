-- Garbage Collection:

function garbage()
   vetor = {'green', 'yellow', 'blue', 'white', 'red'}

   print('Quantidade de memória utilizada: ' ..collectgarbage("count"))

   print('Running garbage collection...')

   collectgarbage("collect")
   print('finish!')

   print('Quantidade de memória utilizada: ' ..collectgarbage("count"))
end

-- garbage()

-----------------------------------------------------------------------

-- Object Oriented:

function fobject()
    Person = {id = 0, name = ''}

    function Person:new(o, id, name)
        o = o or {}
        setmetatable(o, self)
        self.__index = self
        self.id = id
        self.name = name
        return o
    end
    
    p = Person:new(nil, 123, "Anderson")
    print(p.id .. " - " .. p.name)
end

-- fobject()

-----------------------------------------------------------------------

-- Web Programming

-- Curso paralelo de web programming do youtube.

-----------------------------------------------------------------------






















