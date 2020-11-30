function each2(array, cb) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        cb(value);
    }
}


function map2(array, cb) {
    let returnedValues = [];
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        let h = cb(value);
        returnedValues.push(h)
    }
    return returnedValues;
}

let values = [120, 34, 56, 72, 89];

each2(values, (k) => {
    console.log('Printing the multiple ' + k * 100)
});

/*

for (let p = 0; p < values.length; p++) {
    console.log('Printing the multiple ' + values[p] * 100)
}
*/


let collectedValues = map2(values, (g) => {
    return g + 35;
});

console.log(collectedValues);