
var buffer01 = new Buffer(256)

var buffer02 = new Buffer([40, 70, 30, 10, 60, 50, 20])

var buffer03 = new Buffer('Hello, World!')

var len = buffer03.write('Hello, World!')
console.log(len)

len = buffer02.write('Hello, World!')
console.log(len)

console.log(buffer03.toString())

console.log(buffer03.toJSON(buffer03))