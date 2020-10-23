var net = require('net')

var client = net.connect({ port: 8000 }, () => {
    console.log('Client Connected.')
})

client.on('data', (data) => {
    console.log(data.toString())
})

client.on('error', () => {
    console.log('Connection error.')
})