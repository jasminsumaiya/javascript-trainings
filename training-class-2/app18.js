//array.filter & map in [array of objects]
let employeeList = [
    {
        firstName: 'jasmin', lastName: 'sumaiya', age: 26,
        adress: { street: 'first street', state: 'TN' }
    },
    {
        firstName: 'mohamed', lastName: 'rizwan', age: 32,
        adress: { street: 'second street', state: 'KL' }
    },
    {
        firstName: 'vaseela', lastName: 'beevi', age: 12,
        adress: { street: 'third street', state: 'KR' }
    },
    {
        firstName: 'peer', lastName: 'mohamed', age: 18,
        adress: { street: 'forth street', state: 'DL' }
    }
];

let filteredArray = employeeList.filter(function (e) {
    return e.age < 20;
});
console.log(filteredArray);

let mapedArray = filteredArray.map(itemObj => {
    return {
        name: `${itemObj.firstName} ${itemObj.lastName}`,
        state: itemObj.adress.state,
        streeet: itemObj.adress.street
    }
});
console.log(mapedArray);