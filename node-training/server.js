const http = require('http');
const fs = require('fs');
const obj = require("./renamed-file");

const requestListener = function (req, res) {
  //res.writeHead(200, {'Content-Type': 'application/json'});
  //res.end(JSON.stringify(obj.employeeList));

  fs.readFile('./assets/my-first-node.html',function(err,data) {
      if(err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
  });
}

const server = http.createServer(requestListener);
server.listen(8080);