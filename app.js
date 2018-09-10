// install template engine...  choosing ejs.
// install ejs
var express = require('express');
var app = express();

// set template engine as ejs
app.set('view engine','ejs');
// addedfolder views    -> profile.ejs
// edit profile.ejs

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
