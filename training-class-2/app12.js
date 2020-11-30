let input = "jameeja";
/* output = {
    j: 2,
    a: 2,
    m: 1,
    e: 2
}*/

function myFunction(inputStr) {
    let myObj = {};
    for (var i = 0; i < inputStr.length; i++) {
        let char = inputStr[i];
        if (myObj[char] == undefined) {
            myObj[char] = 0;
        }
        myObj[char]++
    }
    return myObj;
}
let result1 = myFunction(input);
console.log(result1);