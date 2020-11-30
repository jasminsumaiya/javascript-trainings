let http = require("http");
//let fs = require("fs");
let empListObj = require("./employee-detail");

const hostname = "localhost";
const port = 3050;

let server = http.createServer(onServerHandler);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function onServerHandler(req, res){
    console.log("onServerHandler: " + req.url);
    if (req.url === "/getemployeedata") {
        handleEmployee(req,res);
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('the employee detail is not found');
    }
}


function handleEmployee(req,res){
    res.writeHead(200, { 'Content-Type': 'application/json'});
    console.log(JSON.stringify(empListObj.employeeList));
    res.end(JSON.stringify(empListObj.employeeList));    
}