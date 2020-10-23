// Cookies

// Instalando o módulo para trabalhar cookie:

//      npm install cookie-parser --save

var express = require('express')
var app = express()

// Referenciando o módulo de cookie
var cookieParser = require('cookie-parser')

// Utilizando o módulo
app.use(cookieParser())

app.get('/', (req, res) => {
    
    // Creating cookie...
    res.cookie('myCookie', 'Hello, World!')

    res.end('Cookie created.')
})

app.listen(8000, () => {
    console.log('Connected!')
})