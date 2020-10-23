// Instalação do expressjs
//      npm install express --save

// Referenciando o modulo express:
var express = require('express')

// Instanciando o express:
var app = new express()

// current path:
console.log(`path: ${__dirname}`)

// Arquivos externos a serem utilizados no projeto:
app.use('/css', express.static(__dirname + '/assets/css'))
app.use('/scripts', express.static(__dirname + '/assets/scripts'))

// Criando um router:
app.get('/', (req, res) => {
    // res.writeHead(200)
    // res.end('Hello, World!');
    res.send('Hello, World!')
})

// Listening at port 3000:
app.listen(3000, () => console.log('connected!'))

/*
    Testing:
        http://192.168.74.137:3000/css/style.css
*/
