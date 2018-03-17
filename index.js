const express = require('express');
const app = express();
const fs = require('fs');
const mustache = require('mustache');//This is currently not used but will be in the future
const ip = require("ip");// ip.address() 
app.use('/src', express.static('src'));
app.get('/', function (req, res) {
    fs.readFile('./templates/index.mustache', 'utf8', (err, data) => {
        if (err) throw err;
        //res.send(mustache.to_html(data, {name: "Joe"}));
        res.send(data);
    });
});
app.get('/student', function (req, res) {
    fs.readFile('./templates/student.mustache', 'utf8', (err, data) => {
        if (err) throw err;
        //res.send(mustache.to_html(data, {name: "Joe"}));
        res.send(data);
    });
});
app.get('/tutor', function (req, res) {
    fs.readFile('./templates/tutor.mustache', 'utf8', (err, data) => {
        if (err) throw err;
        //res.send(mustache.to_html(data, {name: "Joe"}));
        res.send(data);
    });
});
app.get('/guest', function (req, res) {
    fs.readFile('./templates/guest.mustache', 'utf8', (err, data) => {
        if (err) throw err;
        //res.send(mustache.to_html(data, {name: "Joe"}));
        res.send(data);
    });
});


//Host the app
app.listen(3042, () => console.log('Example app listening on port 3042!'));