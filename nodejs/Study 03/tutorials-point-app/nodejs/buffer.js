//var buf = new Buffer('Hello, World!', 'utf-8')
//console.log(buf)

var buf1 = new Buffer(256)
var len = buf1.write("Hello, World!")
console.log("Octetos: ", len)

var buf2 = new Buffer(14)
for(var i = 0; i < 256; i++){
	buf2[i] = buf1[i]
}

console.log(buf1.toString('ascii'))
console.log(buf1.toString('utf-8'))
console.log(buf1.toString('utf8',0,5))
console.log(buf1.toString(undefined,0,5))

var buf3 = new Buffer(13)
var len1 = buf3.write("Hello, World!")
console.log("Octetos: ", len1)

console.log(buf3.toJSON())