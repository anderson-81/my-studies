const express = require('express')

const app = express()

const port = 3000

// Incluido arquivos publicos.
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.send("Hello, World!")
})

app.get('/new', (req, res) => {
	res.send("<form action=\"/create\" method=\"POST\"><div><input type=\"submit\" value=\"SUBMIT\"></div></form>")
})

app.get('/image', (req, res) => {
	res.send("<p><img src=\"/images/flamengo.jpg\"></p>")
})

app.post('/create', (req, res) => {
	res.send('Created!')
})

function frmGET(){
	app.get('/form', (req, res) => {
		res.sendFile(__dirname + '/index.html')
	})

	app.get('/getresult', (req, res) => {
		response = {
	      id:req.query.id,
	      name:req.query.name
	    };
	    console.log(response);
	    res.end(JSON.stringify(response));
	})
}

// frmGET()

function frmPOST(){

	var bodyParser = require('body-parser');

	var urlencodedParser = bodyParser.urlencoded({ extended: false })

	app.get('/frmpost', (req, res) => {
		res.sendFile(__dirname + '/frmpost.html')
	})

	app.get('/postresult', urlencodedParser, (req, res) => {
		response = {
	      id:req.query.id,
	      name:req.query.name
	    };
	    console.log(response);
	    res.end(JSON.stringify(response));
	})
}

// frmPOST()

function fileUpload(){
	var bodyParser = require('body-parser');
	var multer  = require('multer');

	app.use(bodyParser.urlencoded({ extended: false }));
	
	// app.use(multer({ dest: '/tmp/'}));

	app.get('/upload', (req, res) => {
		res.sendFile(__dirname + '/file.html')
	})

	app.post('/file_upload', function (req, res) {
	   console.log(req.files.file.name);
	   console.log(req.files.file.path);
	   console.log(req.files.file.type);
	   var file = __dirname + "/" + req.files.file.name;
	   
	   fs.readFile( req.files.file.path, function (err, data) {
	      fs.writeFile(file, data, function (err) {
	         if( err ) {
	            console.log( err );
	            } else {
	               response = {
	                  message:'File uploaded successfully',
	                  filename:req.files.file.name
	               };
	            }
	         
	         console.log( response );
	         res.end( JSON.stringify( response ) );
	      });
	   });
	})
}

fileUpload()

const server = app.listen(port, () => {
	console.log("Current host: %s ", server.address().address)
	console.log("Current port: %s ", server.address().port)
	console.log("Server running...")
})

// app.listen(port)





