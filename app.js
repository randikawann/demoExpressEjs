// module exports
var express = require('express');

// access to defferent method and attributes
var app = express();

// http methods -> GET, POST, DELETE, PUT
// respoding to requests
/*
    app.get('route',fn);
    app.post('route',fn);
    app.delete('route',fn);
*/
app.get('/',function(req,res){
    res.send('this is test express');
});
app.get('/contact',function(req,res){
    res.send('this is contact pageefsd');
});
app.get('/profile/:id',function(req,res){
    res.send('loggin profile with user id :'+req.params.id);
});
app.listen(3000);
// using defualt finding url
// app.listen(3000,'127.0.0.1');