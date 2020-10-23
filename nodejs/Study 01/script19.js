// POST

// Para trabalhar com POST no express:
//      npm install body-parser

var express = require('express')

var app = express()

var path = require('path')

app.get('/', (req, res) => {
    // http://192.168.74.137:3000/?name=Anderson
    res.sendFile('page19.html', { root: path.join(__dirname, '/pages') })
})

/**************/

// POST

// Referenciando o módulo body-parser
var bodyparser = require('body-parser')

// Utilizando o body-parser...
app.use(bodyparser())

// post
app.post('/', (req, res) => {
    console.log(`REQUEST (POST): ${JSON.stringify(req.body)}`)
    res.send(`Hello, ${req.body.name}!`)
})

/**************/

app.listen(3000, () => {
    console.log('Connected!')
})
