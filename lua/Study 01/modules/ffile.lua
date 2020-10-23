local ffile = {
    ler = function(caminho)
        local arquivo = io.open(caminho, "r")
        local dados = arquivo:read("*a")
        io.close(arquivo)
        return dados
    end
}

return ffile