let numArray = [6, 9, 7, 2, 9, 7, 2, 7, 2];
//{6:1,9:2,7:3,2:3}
function myFunction(arr) {
    let outputObj = {};

    for (var i = 0; i < arr.length; i++) {
        var key = arr[i];

        if (outputObj[key] == undefined) {
            outputObj[key] = 1;
        } else {
            outputObj[key] += 1;
        }
    }

    return outputObj;
}
let resultObj = myFunction(numArray);
console.log(resultObj);

