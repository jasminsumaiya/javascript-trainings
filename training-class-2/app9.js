var inputStr = "afabccbdhrh";
//outputStr = "abch";

function myFunction(input){
    var str = "";
    var newStr = "";
    for(var i= 0; i< input.length; i++){
        var letter = input[i];
        
        if(newStr.indexOf(input.charAt(i)) != -1){
            str += letter;
        } 
        newStr += letter;  
    }
    return str;
}
let result = myFunction(inputStr);
console.log(result);