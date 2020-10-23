#!/bin/bash

# Lendo arquivos:
codigo=0
nome=""

echo "Informe seu codigo: "
read codigo

read -p "Informe seu nome: " nome

echo "$codigo - $nome"

texto="Finalizado."
printf $texto
