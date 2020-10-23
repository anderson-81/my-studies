var express = require('express');
var path = require('path');

var app = express();

app.use('/assets', express.static('assets'));

app.use('/pages', express.static('pages'));

app.get("/14", function (req, res) {
    res.sendFile(path.join(__dirname + '/14.html'));
});

app.get("/15", function (req, res) {
    res.sendFile(path.join(__dirname + '/15.html'));
});

app.get("/16", function (req, res) {
    res.sendFile(path.join(__dirname + '/16.html'));
});

app.get("/17", function (req, res) {
    res.sendFile(path.join(__dirname + '/17.html'));
});

app.get("/18", function (req, res) {
    res.sendFile(path.join(__dirname + '/18.html'));
});

app.get("/19", function (req, res) {
    res.sendFile(path.join(__dirname + '/19.html'));
});

app.get("/20", function (req, res) {
    res.sendFile(path.join(__dirname + '/20.html'));
});

app.listen(8000, function () {
    console.log("listening...");
});