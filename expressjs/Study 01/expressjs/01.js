var express = require('express')

var app = express()

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

app.post('/', (req, res) => {
    res.send('Posted!')
})

app.get('*', (req, res) => {
    res.send('Not Found!')
})

app.listen(8000, () => {
    console.log('Listening...')
})