var inputStr = "aabccbd";
//outputStr = "dcba";

function myFunction(input){
    var str = "";
    for(var i= input.length-1; i>= 0; i--){
        var letter = input[i];
        if(i%2 == 0){
            str += letter;
        }        
    }
    return str;
}
let result = myFunction(inputStr);
console.log(result);