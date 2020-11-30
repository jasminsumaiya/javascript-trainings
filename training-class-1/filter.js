    
function myFilterFunction(numbers, myFunction){
    let newArray = [];
    for(var i= 0; i< numbers.length; i++){
        var newVal = myFunction(numbers[i]);
        if (newVal == true){
            newArray.push(numbers[i]);
        } 
    }
    return newArray;
}

function myFilter(num){
    if(num % 2 == 0){
        return true;
    } else{
        return false;
    }
}

let numberArr = [1, 2, 7, 10, 11];
let filtedArr = myFilterFunction(numberArr, myFilter);
console.log(filtedArr);