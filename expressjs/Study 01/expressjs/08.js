var express = require('express')
var app = express()

// Referenciando o body-parser
var bodyParser = require('body-parser')

var path = require('path')

// Utilizando:

// Configuração 01:
app.use(bodyParser.urlencoded({ extended: true }))

// Configuração 02:
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile('form.html', { root: path.join(__dirname, 'pages') })
})

app.post('/', (req, res) => {
    res.send(`Hello, ${req.body.name}!`)
})

app.get('*', (req, res) => {
    res.end('Page not Found.')
})

app.listen(8000, () => {
    console.log('Connected!')
})