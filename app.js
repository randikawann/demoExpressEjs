// middle ware - any code between request and response it called middlw ware

var express = require('express');
var app = express();

app.set('view engine','ejs');
// use middleware
    // this is without express
// app.use('/assets',function(req,res,next){
//     console.log(req.url);
//     next();
// });
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
