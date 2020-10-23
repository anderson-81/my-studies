#!/bin/bash

# Condições (if... else ... fi):

condition01() {
    saldo=10

    if [ $saldo -gt 0 ]; then
        echo "Positivo"
    else
        echo "Negativo"
    fi
}

condition02() {

    if cd Desktop; then
        echo "Diretório encontrado."
    else
        echo "Diretório não encontrado."
    fi
}

condition01
condition02
