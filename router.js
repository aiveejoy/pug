
var http = require('http');
var fs = require('fs');
var path=require('path');
var url = require('url');
var express= require('express');
var app= express();
app.set("view engine", "pug");
app.set("views", "view");
app.use(express.static('public'))


app.get('/province/:name', function(req,res){
    filename = req.params.name;
    filename = filename+'.json';
    fs.readFile(filename, function(err,data) {
        var contents= JSON.parse(data);
        console.log(contents);
        res.render('index',contents)
    });
    
})
app.listen(8080,function(){
    console.log("started");
});