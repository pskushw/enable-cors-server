var express = require('express');
//var bodyParser = require('body-parser');
var request = require('request');
var app = express();
app.set('port', (process.env.PORT || 3000));
var things = require("./things.js");
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true })); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use("/api", things);
app.listen(app.get('port'), function(){
    console.log('Express server started at PORT : ' + app.get('port'));
});
