var fs = require('fs')

function fs01() {
    console.log('executado antes da leitura.')

    fs.readFile('lorem.txt', 'utf8', (error, data) => {
        if (error) {
            return console.error(error)
        }
        console.log(data)
    })

    console.log('executado provavelmente depois da leitura.')
}

function fs02() {
    console.log('executado antes da leitura.')

    var data = fs.readFileSync('lorem.txt', 'utf8')

    console.log(data)

    console.log('executado provavelmente depois da leitura.')
}

fs01()

fs02()