var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require("path");

let server = http.createServer(myFun);
server.listen(8020);

function myFun(req, res) {
  console.log(req.url);
  if (req.url == "") {
    emptyHandler(req, res);
  }
  else {
    inputHandler(req, res);
  }
}

function emptyHandler(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  return res.end("hello world");
}

function inputHandler(req, res) {

  var query = url.parse(req.url, true).query;
  const filename = path.join(__dirname, query.pathname);
  console.log(filename);

  
  //var filename = "." + q.pathname;
  
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    console.log(data);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}

