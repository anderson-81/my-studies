// Instalação do expressjs
//      npm install express --save

// Referenciando o modulo express.
var express = require('express')

// Instanciando o express.
var app = new express()

// Criando um router
app.get('/', (req, res) => {
    // res.writeHead(200)
    // res.end('Hello, World!');
    res.send('Hello, World!')
})

// Listening at port 3000
app.listen(3000, () => console.log('connected!'))