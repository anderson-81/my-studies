#!/bin/bash

# Operadores matemáticos:

# Imprimindo calculo diretamente:
# EX: $[num1 + num2]

calcular() {
    echo "$1 + $2 = $(($1 + $2))"
    echo "$1 - $2 = $(($1 - $2))"
    echo "$1 x $2 = $(($1 * $2))"
    echo "$1 / $2 = $(($1 / $2))"
    echo "$1 % $2 = $(($1 % $2))"
}

read -p "Informe o primeiro número: " num1
read -p "Informe o segundo número : " num2
calcular $num1 $num2 # calcular num1 num2 FUNCIONA MAS NÃO IMPRIME O NÚMERO CORRETAMENTE.

echo

# No shell ...

# Uso do bc:
# scale=2;
# 5 * 5
# 25
# quit

# Posso usar o bc dentro do arquivo de script.

echo "Resultado por bc:"
echo "scale=2; $num2 * 11" | bc
