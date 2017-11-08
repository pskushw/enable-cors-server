var express = require('express');
//var bodyParser = require('body-parser');
var request = require('request');
var app = express();
var things = require("./things.js");
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true })); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use("/api", things);
app.listen(3000);
