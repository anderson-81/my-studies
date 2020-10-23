function exemplo01()
    -- Incremento padrão:
    for i = 0, 10 do
        print(i)
    end
end

function exemplo02()
    -- Incremento de 2 em 2:
    for i = 0, 10, 2 do
        print(i)
    end
end

function exemplo03()
    i = 0
    -- A execução só ocorre quando a condição e falsa.
    repeat
        print(i)
        i = i + 1
    until i > 10 -- até i ser maior ou igual a 10
end

-- exemplo01()
-- exemplo02()
exemplo03()