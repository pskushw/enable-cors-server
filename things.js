var express = require('express');
var request = require('request');
var router = express.Router();
router.get("/",function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
//
//router.get("/:id", function(req, res) {
//    res.send('The id you specified is '+ req.params.id);
//});

router.get("/:name/:id", function(req, res) {
    res.send('id: ' + req.params.id + ' and name: ' + req.params.name);
});
router.post("/",function(req, res) {
    res.send('POST route on things.');
});
router.get("/some", function(req, res){
    request.get("http://run.plnkr.co/plunks/v8xyYN64V4nqCshgjKms/data-1.json",function(err,response,body){
        res.json(JSON.parse(body));
    });
});

module.exports = router;