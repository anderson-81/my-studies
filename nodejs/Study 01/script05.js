var http = require('http')

const callback = (req, res) => {
    console.log(`URL: ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello, World!')
}

var server = http.createServer(callback)
server.listen(3000, () => console.log('Connected!'))