var express = require('express')
var app = express()
var path = require('path')

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Referenciando pug:
var pug = require('pug')

// Utilizando:
//      Configurando os atributos 'views' e 'view engine'

// Configuração 01:
//      Setando o engine de templates a ser utilizado 
app.set('view engine', 'pug')

// Configuração 02:
//      Setando atributo views em app (express)
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('form', { title: 'Formulário' })
})

app.post('/', (req, res) => {
    res.render('index', { name: req.body.name })
})

var people = [
    { id: 123, name: 'John' },
    { id: 211, name: 'Lucy' },
    { id: 355, name: 'Mary' },
    { id: 401, name: 'Jason' },
    { id: 576, name: 'Michael' },
    { id: 609, name: 'Tiffany' },
    { id: 701, name: 'Anne' },
]

app.get('/people', (req, res) => {
    res.render('list', { people: people })
})

app.listen(8000, () => {
    console.log('Connected!')
})