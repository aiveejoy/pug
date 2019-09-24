var fs = require('fs');
var express= require('express');
var app= express();
var REQ = require('./req.js');
app.set("view engine", "pug");
app.set("views", "view");

app.use(function(req,res,next){
    REQ.numberOfRequest(req,res,req.originalUrl);
    next();
});
app.use(express.static('public'));

app.get('/province/:name', function(req,res){
    filename = req.params.name;
    filename = filename+'.json';
    fs.readFile(filename, function(err,data) {
        var contents= JSON.parse(data);
        res.render('index',contents)
    });
    
});

app.listen(8080,function(){
    console.log("started");
});