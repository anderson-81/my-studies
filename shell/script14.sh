#!/bin/bash
#   Estruturas de repetição:

people=(Anne Lucy Carmen Taylor)

# Imprimindo todos os itens:
echo "Listando itens:"
echo ${people[*]}

echo

# Pegando nome de "lista.txt":
echo "Listando itens mediante arquivo:"
arquivo=/shared/shell/lista.txt
for p in `cat $arquivo`
do
    echo $p
done