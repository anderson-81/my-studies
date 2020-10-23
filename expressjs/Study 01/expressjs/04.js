var express = require('express')

var app = express()

app.all('/caminho', (req, res) => {
    res.send('Hello, World!')
})

app.listen(8000, () => {
    console.log('Listening...')
})