var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made'+ req.url);
    res.writeHead(200,{'Content-Type':'application/json'});
    var myobj = {
        name : "ran",
        job : "se",
        age : "23"
    };
    res.end(JSON.stringify(myobj));
});
    console.log('now server listning');
    server.listen('3000','127.0.0.1');