// Nodemon

/*
    Nodemon is a utility that will monitor for any changes in your source and 
    automatically restart your server.
*/

// Instalando o Nodemon:

//      npm install nodemon --save -g

// Utilizando o Nodemon:

//      nodemon script22.js


var express = require('express')
var app = express()

app.get('/', (req, res) => {
    res.end('Hello, World!')
})

app.listen(8000, () => {
    console.log('Connected!')
})