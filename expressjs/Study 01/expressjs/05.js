var express = require('express')

var app = express()

var people = [
    { id: 1, name: 'José' },
    { id: 2, name: 'Maria' },
    { id: 3, name: 'Fernanda' },
    { id: 4, name: 'João' },
    { id: 5, name: 'Renata' },
    { id: 6, name: 'Joaquim' },
    { id: 7, name: 'Rui' },
]

app.get('/people/:id([0-9]{1,5})', (req, res) => {
    let id = req.params.id

    var person = null

    for (const p of people) {
        if (p.id == id) {
            person = p
            break
        }
    }

    if(person != null){
        res.send(`ID: ${person.id} | NAME: ${person.name}`)
    }else{
        res.send(`Person not found.`)
    }
})

app.listen(8000, () => {
    console.log('Listening...')
})