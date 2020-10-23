var express = require('express')
var app = express()

// Referenciando o cookie-parser
var cookieParser = require('cookie-parser');

// Utilizando:
app.use(cookieParser())

app.get('/', (req, res) => {

    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)

    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
})

app.listen(8000, () => {
    console.log('Connected!')
})