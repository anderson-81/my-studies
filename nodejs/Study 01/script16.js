// Simple HTML Server - Part 01

var express = require('express')

// Uso do modulo path para colocar o caminho dos html's.
var path = require('path')

var app = express()

// Utilizando assets:
app.use('/css', express.static(__dirname + '/assets/css'))

app.get('/', (req, res) => {
    // Enviando um arquivo html ao acessar um link:
    res.sendFile('page16.html', { root: path.join(__dirname, '/pages') })
})

app.listen(3000, () => {
    console.log('Connected!')
})