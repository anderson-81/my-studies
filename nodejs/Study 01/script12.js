// Eventos

var events = require('events')

var myEvent = new events.EventEmitter()

myEvent.on('myEvent', (...params) => {
    console.log(params)
    try {
        alert('FIRED')
    } catch (error) {
        console.log('FIRED!')
    }
})

// Disparando e passando vários argumentos:
myEvent.emit('myEvent', 'Testando', true, 7621.11, Date.now())