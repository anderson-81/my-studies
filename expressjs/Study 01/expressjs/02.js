var express = require('express')
var router = express.Router()
var app = express()

app.use("/caminhos", router)

router.get('/caminho1', (req, res) => {
    res.send('Caminho01!!!')
})

// curl -X POST http://192.168.74.137:8000/caminhos/caminho2
router.post('/caminho2', (req, res) => {
    res.send('Caminho02!!!')
})

app.listen(8000, () => {
    console.log('Listening...')
})