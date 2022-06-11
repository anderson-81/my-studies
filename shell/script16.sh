#!/bin/bash
# Estrutura WHILE:

cont=0
while [ $cont -lt 10 ]
do
    echo $cont
    cont=$[ $cont + 1 ]
done