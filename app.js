var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('request was made: '+ req.url);
    if(req.url==='/home' || req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname +'/contact.html').pipe(res);
    }
    else if(req.url==='/randika/json'){
        var myObj = [{name : "randika", age:24},{name : "ramila" , age:30}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(myObj));
    }else{
        res.writeHead(404,{'Content-Type':'text.html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }
    
});
    console.log('now server listning');
    server.listen('3000','127.0.0.1');

    