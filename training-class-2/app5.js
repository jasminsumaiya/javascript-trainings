let numArray = [6, 9, 7, 2, 9, 6, 2, 7, 2];
//{odd: [9,7]', even: [6,2]}
function myFunction(arr) {
    let outputObj = {
        even: [],
        odd: []
    };

    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];

        if (num % 2 == 0 & outputObj['even'].indexOf(num) == -1) {
            outputObj['even'].push(num);
        }
        if (num % 2 != 0 & outputObj['odd'].indexOf(num) == -1) {
            outputObj['odd'].push(num);
        }
    }

    return outputObj;
}
let resultObj = myFunction(numArray);
console.log(resultObj);

