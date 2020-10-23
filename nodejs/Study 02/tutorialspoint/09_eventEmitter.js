var events = require('events')

var myEvent = new events.EventEmitter()

const method01 = () => {
    console.log('fired 01!')
}

myEvent.addListener('fire', method01)

myEvent.emit('fire')

const method02 = () => {
    console.log('fired 02!')
}

myEvent.addListener('fire', method02)

myEvent.emit('fire')

myEvent.removeListener('fire', method01)

myEvent.emit('fire')