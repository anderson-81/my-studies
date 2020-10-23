// Importando o módulo http.
var http = require('http')

// Callback executando ao escutar a porta listen.
const callback = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello, World!')
}

// Criação da conexão com a porta 3000.
http.createServer(callback).listen(3000)

