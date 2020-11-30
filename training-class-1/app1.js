//input = "sumaya","a";
//output => a = 2;


function myFunction(name,letter){
    var sumOfLetter = 0;
    for(var i = 0; i < name.length; i++){
        if(name[i] === letter){
            sumOfLetter  += 1;
        }
    }
    return sumOfLetter;
}
var a = myFunction("sumaiya","a");
console.log(a);