let inputObj = {
    firstName: "mohamed",
    middleName: "jasmin",
    lastName: "sumaiya"
}

function myFunction(obj){
    let outputObj = {};
    for(var key in obj){
        outputObj[obj[key]] = key;
    }
    return outputObj;
}
let result = myFunction(inputObj);
console.log(result);