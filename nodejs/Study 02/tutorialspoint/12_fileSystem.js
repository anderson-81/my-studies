// Leitura de arquivo:

//      readFile ou readFileSync

var fs = require('fs')

function OpenFile() {
    fs.open('lorem.txt', (error, data) => {
        if (error) {
            return console.log(error)
        }

        console.log('Successfully opened.')
    })
}

function StatFile() {
    fs.stat('lorem.txt', (error, data) => {
        if (error) {
            return console.log(error)
        }

        console.log(data.isDirectory())
        console.log(data.isFile())
    })
}

function writeReadFile() {
    var fs = require('fs')

    fs.writeFile('hello.txt', 'Hello, World!', (error) => {
        if (error) {
            return console.log(error)
        }
    })

    fs.readFile('hello.txt', (error, data) => {
        if (error) {
            return console.log(error)
        }
        console.log(data)
        console.log(data.toString())
    })
}

// OpenFile()
// StatFile()
// writeReadFile()



