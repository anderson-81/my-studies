var net = require('net')
const { clearInterval } = require('timers')

var server = net.createServer((conn) => {

    setInterval(() => {
        conn.write('Hello, World!')
    }, 2000)

    setTimeout(() => {
        client.end()
    }, 30000)

    conn.on('end', () => {
        console.log('Terminated!')
    })

    conn.pipe(conn)
})

server.listen(8000, () => {
    console.log('Connected!')
})