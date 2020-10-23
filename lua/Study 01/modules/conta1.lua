local conta = {}

function conta.abrirconta(valor)
    local instancia = {
        saldo = valor
    }

    function instancia.depositar(self, valor)
        self.saldo = self.saldo + valor 
    end

    function instancia:exibirsaldo()
        return self.saldo
    end

    return instancia
end

return conta