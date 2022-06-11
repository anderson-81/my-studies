#!/bin/bash
# Estrutura de repetição com if:

path=/etc/*

for item in $path
do
    if [ -d $item ]
    then
        echo "$item - é um diretório"
    elif [ -f $item ]
    then
        echo "$item - é um arquivo."
    fi
done