// GET

var express = require('express')

var app = express()

app.get('/', (req, res) => {
    
    // Verificando o query na requisição:
    // http://192.168.74.137:3000
    // Result: {}
    // http://192.168.74.137:3000/?fname=John&lname=Taylor
    // {"fname":"John","lname":"Taylor"}
    // res.send(JSON.stringify(req.query))

    
    // http://192.168.74.137:3000/?name=Anderson
    res.send(`Hello, ${req.query.name}!`)
})

app.listen(3000, () => {
    console.log('Connected!')
})