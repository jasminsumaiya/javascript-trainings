let numArray = [6,9,7,2,1,5,12,24,3];
function myFunction(arr){
let outputObj = {
    min:100, 
    max:0
};

 for(var i= 0; i< arr.length; i++){
    if(arr[i] < outputObj['min']){
        outputObj['min'] = arr[i];
    }
    if(arr[i] > outputObj['max']){
        outputObj['max'] = arr[i];
    }
 }

 return outputObj;
}
let resultObj = myFunction(numArray);
console.log(resultObj);

