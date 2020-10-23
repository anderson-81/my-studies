-- função sem retorno -------------

function greeting(name)
    print("Hello, " ..name)
end

greeting("Anderson")

-- função com retorno -------------

function somar(num1, num2)
    return num1 + num2
end

print(somar(30, 8))