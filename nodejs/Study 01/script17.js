// Simple HTML Server - Part 02

var express = require('express')

var app = express()

app.get('/^(.+)$/', (req, res) => {
    console.log(req.params)
})

app.listen(3000, () => {
    console.log('Connected!')
})