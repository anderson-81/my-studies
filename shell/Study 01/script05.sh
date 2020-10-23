#!/bin/bash

# Funções:

# Podem ser feitas diretamente no shell.

hello() {
    ls -l
    echo "Hello, World!"
    echo "Hello, $1!"
}

hello

hello "Anderson"

# Usando o alias para comandos ou sequência de comandos:

# EX:
# alias remover='rm -f'

# Removendo o alias:

# EX:
# unalias remover

# showalias(){
#     alias
# }

falias() {

    echo "$(tput setaf 2)alias remover='rm -f'"
    alias remover='rm -f'
    echo "$(tput setaf 3)touch testando"
    touch testando
    echo "$(tput setaf 4)remover testando"
    remover testando

    echo "$(tput setaf 3)touch testando"
    touch testando
    echo "$(tput setaf 2)unalias remover"
    unalias remover
    echo "$(tput setaf 4)remover testando"
    remover testando
    echo "rm -f testando"
    rm -f testando
}

falias

# showalias
