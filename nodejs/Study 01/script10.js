// FileSystem 01

function fsAsync() {

    var fs = require('fs')

    console.log('Execução antes da leitura.')

    fs.readFile('lorem.txt', 'utf8', (error, data) => {
        console.log(data)
    })

    console.log('Execução provavelmente depois da leitura.')
}

function fsWithoutUTF() {

    var fs = require('fs')

    fs.readFile('lorem.txt', (error, data) => {
        console.log(data)
    })
}

function fsSync() {

    var fs = require('fs')

    console.log('Execução antes da leitura.')

    var data = fs.readFileSync('lorem.txt', 'utf8')

    console.log(data)

    console.log('Execução provavelmente depois da leitura.')
}

// fsAsync()

// fsWithoutUTF()

fsSync();