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
    // edit this
            // res.send('loggin profile with user id :'+req.params.id);
    // res.render('profile');
            // edit this to add params... create object
    res.render('profile',{person: req.params.id});
    // added this to profile.ejs file
});
app.listen(3000);
