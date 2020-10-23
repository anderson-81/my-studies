const fs = require('fs')

function file01(){
	const result = fs.readFileSync('file.txt')
	console.log(result.toString())
	console.log('Program running...')
}

function file02(){
	fs.readFile('file.txt', (err, data) => {
		if(err)
			return console.error(err)
		console.log(data.toString())
	})
	console.log('Program running...')
}

const opc = false

if(opc){
	file01()
}else{
	file02()	
}

