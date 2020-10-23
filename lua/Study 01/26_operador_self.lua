-- O "dois-pontos" serve para chamar self como primeiro parâmetro da função.
-- Logo obj:GoGoGo(name) deve ser a mesma coisa que obj.GoGoGo(obj, name).

function exemplo01()
    local conta = require("modules/conta1")

    local operacao = conta.abrirconta(1000)
    
    operacao:depositar(350)
    
    print(operacao:exibirsaldo()) -- print(operacao.exibirsaldo(self)) DEU ERRO !!!
end

function exemplo02()
    local conta = require("modules/conta2")

    local operacao = conta:abrirconta(1000)
    
    -- operacao:depositar(350)
    
    -- print(operacao:exibirsaldo()) -- print(operacao.exibirsaldo(self)) DEU ERRO !!!

    print(operacao.exibirsaldo())
end

-- exemplo01()
exemplo02()

