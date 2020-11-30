//convert number into conditional array
let num1 = 20;
let num2 = 5;

//output = [0,5,10,15,20];

function myFunction(num1,num2){
    let newNumArr = [];

    for(var i= 0; i<= num1; i++){
        if(i%num2 == 0){
            newNumArr.push(i);
        }
    }


    return newNumArr;
}
let resultArr = myFunction(num1,num2);
console.log(resultArr);