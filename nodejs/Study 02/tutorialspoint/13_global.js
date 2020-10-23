

console.log(`FILENAME: ${__filename}`)

console.log(`DIRNAME: ${__dirname}`)


function ftimeout() {

    var t = setTimeout(method, 2000)

    function method() {
        console.log('Hello, World!')
        clearTimeout(t)
    }
}

function finterval() {

    function method() {
        console.log('Hello, World!')
    }

    var t = setInterval(method, 2000)

    // clearInterval(t)
}

function fconsole() {
    console.info("Program Started");

    var counter = 10;
    console.log("Counter: %d", counter);

    console.time("Getting data");
    //
    // Do some processing here...
    // 
    console.timeEnd('Getting data');

    console.info("Program Ended")
}

// ftimeout()

// finterval()

// fconsole()


process.stdout.write('Hello, World!\n')

console.log(process.execPath)

console.log(process.platform)

process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});


// Print the current directory
console.log('Current directory: ' + process.cwd());

// Print the process version
console.log('Current version: ' + process.version);

// Print the memory usage
console.log(process.memoryUsage());

/*
process.on('exit', function(code) {
    // Following code will never execute.
    setTimeout(function() {
       console.log("This will not run");
    }, 0);

    console.log('About to exit with code:', code);
 });
*/