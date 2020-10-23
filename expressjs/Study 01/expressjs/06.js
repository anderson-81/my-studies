var express = require('express')

var app = express()

app.use('/', (req, res, next) => {
    console.log(`Requisição efetuada: ${Date.now()}`);
    next()
})

app.listen(8000, () => {
    console.log('Listening...')
})