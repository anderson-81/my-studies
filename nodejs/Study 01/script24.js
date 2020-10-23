// Advanced Routing - part 02

var express = require('express')
var app = express()

var router = express.Router()

app.use('/user', router)

router.get('/:username/:group', (req, res) => {
    res.end(JSON.stringify(req.params))
})

app.listen(8000, () => {
    console.log('Connected!')
})