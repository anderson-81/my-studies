var express = require('express')
var router = require('./modules/router')
var app = express()

app.use("/caminhos", router)

app.listen(8000, () => {
    console.log('Listening...')
})