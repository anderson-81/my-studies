#!/bin/bash

# Comparando valores:

num1=3
num2=7

cmpnum() {
    if [ $num1 -eq $num2 ]; then
        echo "Igual"
    else
        echo "Não é igual"
    fi

    if [ $num1 -ne $num2 ]; then
        echo "Não é igual"
    else
        echo "Igual"
    fi

    if [ $num1 -gt $num2 ]; then
        echo "Maior"
    else
        echo "Menor"
    fi

    if [ $num1 -lt $num2 ]; then
        echo "Menor"
    else
        echo "Maior"
    fi

    if [ $num1 -ge $num2 ]; then
        echo "Maior ou igual"
    else
        echo "Menor"
    fi

    if [ $num1 -le $num2 ]; then
        echo "Menor ou igual"
    else
        echo "Maior"
    fi
}

cmpnum

# --------------------------------------------

cmpstring() {
    if [ $num1 == $num2 ]  
    then
        echo "Igual"
    else
        echo "Não é igual"
    fi
    
    if [ $num1 != $num2 ] 
    then
        echo "Não é igual"
    else
        echo "Igual"
    fi

    if [ $num1 > $num2 ] 
    then
        echo "Maior"
    else
        echo "Menor"
    fi

    if [ $num1 < $num2 ] 
    then
        echo "Menor"
    else
        echo "Maior"
    fi

    # if [ $texto1 >= $texto2 ] 
    # then
    #     echo "Maior ou igual"
    # else
    #     echo "Menor"
    # fi

    # if [ $texto1 <= $texto2 ]
    # then
    #     echo "Menor ou igual"
    # else
    #     echo "Maior"
    # fi
}

cmpstring