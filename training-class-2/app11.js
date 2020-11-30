let inputStr = "mohamed#jasmin#sumaiya";
/*{
    firstName: mohamed
    lastName:jasmin
    middleName:sumaiya
}*/

function splitFun(input){
    let outputObj = {};

    let curNameArr = input.split('#');
        console.log(curNameArr); //["mohamed", "jasmin", "sumaiya"];

    for (var i= 0; i< curNameArr.length; i++){

        if(i == 0){
            outputObj['firstName'] = curNameArr[i];
        }else if (i == 1){
            outputObj['middleName'] = curNameArr[i];
        }else {
            outputObj['lastName'] = curNameArr[i];
        }
        
    }
    return outputObj;
}
let result = splitFun(inputStr);
console.log(result);