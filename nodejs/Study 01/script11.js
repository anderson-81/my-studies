// FileSystem 02

function write01() {
    var fs = require('fs')

    console.log('EXECUTADO ANTES DA ESCRITA.')

    var data = 'Hello, World!'

    var result = fs.writeFile('file.txt', data, 'utf8', (error) => {
        if (error) {
            throw error
        }
        console.log('Arquivo escrito!')
    })

    console.log('EXECUTADO PROVAVELMENTE DEPOIS DA ESCRITA.')
}

function write02() {
    var fs = require('fs')

    console.log('EXECUTADO ANTES DA ESCRITA.')

    var data = 'Olá, Mundo!'

    var result = fs.writeFileSync('file.txt', data, 'utf8')

    console.log('EXECUTADO PROVAVELMENTE DEPOIS DA ESCRITA.')
}

write02()

