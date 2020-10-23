#!/bin/bash

# Estrutura condicional aninhada:

valor=1500

if [ $valor -gt 0 ]; then
    echo "Positivo"
elif [ $valor == 0 ]; then
    echo "Zerado"
elif [ $valor -lt 0 ]; then # ou else sem o then
    echo "Negativo"
fi
