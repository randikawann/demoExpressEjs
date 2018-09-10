// module exports
var express = require('express');

// access to defferent method and attributes
var app = express();

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});
app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/contact.html');
});
app.get('/profile/:id',function(req,res){
    res.send('loggin profile with user id :'+req.params.id);
});
app.listen(3000);
