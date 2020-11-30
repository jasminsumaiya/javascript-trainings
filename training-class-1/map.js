let numberArr = [1, 2, 3, 4, 5];
    
function myMapFunction(numbers, myFunction){
    let newArray = [];
    for(var i= 0; i< numbers.length; i++){
        var newVal = myFunction(numbers[i]);
        newArray.push(newVal);
    }
    return newArray;
}

function myMap(num){
   return num *25;
}   

let mapedArr = myMapFunction(numberArr , myMap);
console.log(mapedArr);