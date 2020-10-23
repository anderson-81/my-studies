

function fOSmodule() {

    var os = require('os')

    console.log(`Default directory for temp files: ${os.tmpdir()}`)
    console.log(`Endianness of the CPU: ${os.endianness()}`)
    console.log(`Hostname: ${os.hostname()}`)
    console.log(`Operating System: ${os.type()}`)
    console.log(`Operating system platform: ${os.platform()}`)
    console.log(`Arch: ${os.arch()}`)
    console.log(`Release: ${os.release()}`)
    console.log(`System uptime in seconds: ${os.uptime()}`)
    console.log(`${os.loadavg()}`)
    console.log(`total amount of system: ${os.totalmem()}`)
    console.log(`Amount of free system memory in bytes: ${os.freemem()}`)
    console.log(`${os.cpus()}`)
    console.log(`${os.networkInterfaces()}`)
    console.log(`${os.EOL}`)
}

// fOSmodule()

function fPathModule() {
    var path = require("path");

    // Normalization
    console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

    // Join
    console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

    // Resolve
    console.log('resolve : ' + path.resolve('main.js'));

    // extName
    console.log('ext name : ' + path.extname('main.js'));
}

// fPathModule()

function fDNS() {
    var dns = require('dns')

    dns.lookup('www.google.com.br', (error, address, family) => {
        console.log(`Address: ${address}`)
        if (error) {
            return console.log(error)
        }

        dns.reverse(address, (error, hostnames) => {
            if (error) {
                return console.log(error)
            }

            console.log(`HOSTANAMES: ${hostnames}`)
        })
    })
}


function fModule() {
    var EventEmitter = require("events").EventEmitter;
    var domain = require("domain");

    var emitter1 = new EventEmitter();

    // Create a domain
    var domain1 = domain.create();

    domain1.on('error', function (err) {
        console.log("domain1 handled this error (" + err.message + ")");
    });

    // Explicit binding 
    domain1.add(emitter1);

    emitter1.on('error', function (err) {
        console.log("listener handled this error (" + err.message + ")");
    });

    emitter1.emit('error', new Error('To be handled by listener'));
    emitter1.removeAllListeners('error');
    emitter1.emit('error', new Error('To be handled by domain1'));

    var domain2 = domain.create();

    domain2.on('error', function (err) {
        console.log("domain2 handled this error (" + err.message + ")");
    });

    // Implicit binding
    domain2.run(function () {
        var emitter2 = new EventEmitter();
        emitter2.emit('error', new Error('To be handled by domain2'));
    });

    domain1.remove(emitter1);
    emitter1.emit('error', new Error('Converted to exception. System will crash!'));
}

fModule()