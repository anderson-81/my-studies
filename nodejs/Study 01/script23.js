// Advanced Routing - part 01
var express = require('express')

var app = express()

// Referenciando Router
var router = express.Router()

// Alterações:

/*
app.get('/', (req, res) => {
    res.writeHead(200, 'utf8', { 'Content-Type': 'text/plain' })
    res.end('Hello, World!')
})
*/

// Crio uma raíz:
app.use('/caminho', router)

// Primeiro sub-rota:
router.get('/caminho1', (req, res) => {
    res.writeHead(200, 'utf8', { 'Content-Type': 'text/plain' })
    res.end('Path01')
})

// Segunda sub-rota:
router.get('/caminho2', (req, res) => {
    res.writeHead(200, 'utf8', { 'Content-Type': 'text/plain' })
    res.end('Path02')
})

app.listen(8000, () => {
    console.log('Connected!')
})