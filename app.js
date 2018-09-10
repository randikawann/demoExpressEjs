// query string not update this.. later update it...

var express = require('express');
var app = express();

app.set('view engine','ejs');

app.use('/assets',express.static('stuff'));

app.get('/',function(req,res){
    res.render('index');
});
app.get('/contact',function(req,res){
    res.render('contact');
});
app.get('/profile/:id',function(req,res){
    var data  = {name:'randika', age : '24', hobbies : ['eating','fighting','fishing']};
    res.render('profile',{person: req.params.id, data : data});
});
app.listen(3000,function(){
    console.log("app is listening on port 3000");
});
