var events = require('events')

var myEvent = new events.EventEmitter()

const method = () => {
    console.log('fired!')
}

myEvent.on('fire', method)

myEvent.emit('fire')