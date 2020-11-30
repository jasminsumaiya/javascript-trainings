var fs = require('fs');

var obj = {
    firstName: "jasmin",
    lasttName: "sumaiya"
}
const fileName = "mynewfile3.txt";

function writeNewFile(fileName,outputObj){
    fs.writeFile(fileName, JSON.stringify(outputObj), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    
}

function myLog(message){
    console.log(message);
}

/*exports = {};
exports.resultMsg = myLog;
exports.writeNewFile = writeNewFile;*/

exports = {
    resultMsg: myLog,
    writeNewFile: writeNewFile,
}
