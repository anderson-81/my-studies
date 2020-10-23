#!/bin/bash

# Operadores logicos:

x=0
y=1

echo $x
echo $y

if [ $x ] || [ $y ]; then
    echo "true"
else
    echo "false"
fi

if [ $x ] && [ $y ]; then
    echo "true"
else
    echo "false"
fi
