// (string split) array into object

let inputArr = ['rizwan#99', 'jasmin#89', 'sumaiya#89'];
function myFunction(input) {
    const outputObj = {};
    for (let i = 0; i < input.length; i++) {
        let currentArr = input[i].split('#');  //'rizwan',99
        //console.log(currentArr);

        const key = currentArr[1]; //99
        const value = currentArr[0];  //rizwan

        let nameList = outputObj[key] || [];
        nameList.push(value);
        outputObj[key] = nameList;

        if (outputObj[key] == null) {
            outputObj[key] = [];
        }

        outputObj[key].push(value);
    }
    return outputObj;
}
let resultObj = myFunction(inputArr);
console.log(resultObj);