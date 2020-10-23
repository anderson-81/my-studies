var express = require('express')

var app = express()

app.use((req, res, next) => {
    console.log(`Requisição recebida: ${new Date().toISOString()}`)
    next() // Sem ele, e requisição nunca termina.
})

app.get("/", (req, res, next) => {
    res.end("Hello, World!")
    next()
})

app.use("/", (req, res) => {
    console.log('Fim da requisição.')
})

app.listen(8000, () => {
    console.log('Connected!')
})