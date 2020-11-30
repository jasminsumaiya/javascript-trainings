// ascending order

var a = [5,10,15];
var b = [2,4,6,12];

function combineArray(a,b){
    var output = [];
    var joinArray = a.concat(b);
    console.log(joinArray);
    for(var i= 0; i< joinArray.length;i++){
        if(joinArray[i] > 0){
            output.push(joinArray[i]);
        }else{
            output.unshift(joinArray[i]);
        }   
    }
    return output;
}

var result = combineArray(a,b);
console.log(result);