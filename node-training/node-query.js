var http = require('http');
var url = require('url');

const hostname = 'localhost'; //localhost
const port = 3030;

let server =  http.createServer(muFun);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
    
function muFun(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}