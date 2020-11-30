var inputStr = "aabccbd";
//outputStr = "a2b2c2";

function myFunction(input){
    var outputObj = {};
    var str = "";
    for(var i= 0; i< input.length; i++){
        var letter = input[i];
        
        if(outputObj[letter] != undefined){
            outputObj[letter] += 1;
        }else{
        outputObj[letter] = 1; 
        }     
    }
    
    for(var key in outputObj){
        str += `${key}${outputObj[key]}`;
    }
    return str;
}
let result = myFunction(inputStr);
console.log(result);