var http = require('http');
var fs = require('fs');
const obj = require("./renamed-file");

const hostname = "localhost";
const port = 3000;

let server = http.createServer(serverHandler);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function serverHandler(req, res) {
    if (req.url == "/sumaiya") {
        handleHTML(req,res);
    }
    else if (req.url == "/jasmin") {
        handleJSON(req,res);
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello jasmin sumaiya');
    }
}

function handleHTML(req,res){   
    fs.readFile('./Documents/summer.html',function(err,data){
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}

function handleJSON(req,res){
    //object =>  'Content-Type': 'application/json'
    res.writeHead(200, { 'Content-Type': 'application/json'});
    res.end(JSON.stringify(obj.employeeList));    
}







