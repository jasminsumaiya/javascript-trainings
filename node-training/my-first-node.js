//var http = require('http');
//var fs = require('fs');

/*http.createServer(function (req, res) {
  fs.readFile('my-first-node.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(data);
    res.write(data);
    return res.end();
  });
}).listen(8080);*/


/*fs.readFile('my-first-noe.htl', function(err, data) {
    if(err){
        console.log("No file found");
        return;
    }
    console.log(data);
  });*/


const path = require('path');
const fs = require('fs');
const createNodeObj = require("./creat-node");
const writeNewFile = createNodeObj.writeNewFile;
const resultMsg = createNodeObj.resultMsg;

const directoryPath = path.join(__dirname, 'Documents');
console.log(__dirname); //D:\workspace\javascript-training\node-training
console.log(directoryPath); //D:\workspace\javascript-training\node-training\Documents

const fileName = "mycheck";
const outputFileName = `${fileName}-stats.txt`;

fs.readdir(directoryPath, function (err, files) {

  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  let fileNameInfo = {
    newLongestFile: '',
    maxVal: 1,
    newSmalestFile: '',
    minVal: 1000,
  };

  files.forEach(function (file) {

    if (file.length > fileNameInfo.maxVal) {
      fileNameInfo.maxVal = file.length;
      fileNameInfo.newLongestFile = file;
    }

    if (file.length < fileNameInfo.minVal) {
      fileNameInfo.minVal = file.length;
      fileNameInfo.newSmalestFile = file;
    }
  });

  fileNameInfo.numberOfFile = files.length;
  //console.log(fileNameInfo.newLongestFile);
  delete fileNameInfo.maxVal;
  //console.log(fileNameInfo.newSmalestFile);
  delete fileNameInfo.minVal;

  writeNewFile(outputFileName, fileNameInfo);
  
});

/*function writeNewFile(fileName,outputObj){
  fs.writeFile(fileName, JSON.stringify(outputObj), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });

}*/