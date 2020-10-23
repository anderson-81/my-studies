var events = require('events')

var emitter = new events.EventEmitter()

var function01 = function(){
	console.log('Listener 01')
}

var function02 = function(text){
	console.log('Listener 02')
}

emitter.addListener('evento01', function01)
emitter.addListener('evento01', function02)

emitter.emit('evento01')

emitter.removeListener('evento01', function01);

emitter.emit('evento02')

emitter = require('events').EventEmitter.listenerCount(emitter,'evento01');
console.log('Quantidade: ' + emitter);