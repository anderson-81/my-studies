function exemplo01()

    vetor = {'green','yellow','blue','white','red'}

    print(vetor[2])

    print('Quantidade de itens: ' .. #vetor) -- Quantidade de itens.

    print(vetor)

    vetor[#vetor + 1] = 'orange' -- Adicionando item no (ultimo indice + 1).

    print(vetor[5])

    -- Imprimindo os itens de um array.
    for index = 0, #vetor, 1 do
        print(vetor[index])
    end
end

function exemplo02()

    vetor = {65,55,-11}

    dict = {
        a = 1,
        ["sword"] =  100,
        color = 'blue',
        salary = 5432.11,
        status = true,
        item = vetor[2],
        mira = {
            posicao = {x = 100, x = 300}
        }
    }

    print(dict)

    print(dict["sword"])

    print(dict.item)

    -- print('Quantidade de itens no dicionário: ' + #dict)

    for x, y in pairs(dict) do
        print(x, y)
    end
end

opc = 2
if(opc == 1) then
    exemplo01()
else
    exemplo02()
end