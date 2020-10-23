// Para trabalhar com stream utilizar o módulo fs.

var fs = require('fs')

function ReaderStream() {

    var data = ''

    var readerStream = fs.createReadStream('lorem.txt')

    readerStream.setEncoding('UTF8')

    readerStream.on('data', (chunk) => {
        data += chunk
    })

    readerStream.on('end', () => {
        console.log(data)
    })

    readerStream.on('error', (error) => {
        console.log(error)
    })
}

function WriterStream() {

    var data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.`


    var writerReader = fs.createWriteStream('lorem.txt')

    writerReader.write(data, 'UTF8')

    writerReader.end()

    writerReader.on('finish', () => {
        console.log('Write completed.')
    })

    writerReader.on('error', (error) => {
        console.log(error)
    })

}

function PipeStream() {

    var readerStream = fs.createReadStream('lorem.txt')
    var writerStream = fs.createWriteStream('output.txt')

    readerStream.pipe(writerStream)
}

function CompressFile() {

    var zlib = require('zlib')

    fs.createReadStream('lorem.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('lorem.txt.gz'))

    fs.unlinkSync('lorem.txt');
}

function DecompressFile(){
    
    var zlib = require('zlib')

    fs.createReadStream('lorem.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('lorem.txt'))

    fs.unlinkSync('lorem.txt.gz');
}

// WriterStream()
// ReaderStream()
// PipeStream()
// CompressFile()

// CompressFile()
// DecompressFile()




