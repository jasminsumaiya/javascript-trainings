let employeeList = [
    { firstName: "john", lastName: "deo", age: 30 },
    { firstName: "will", lastName: "smith", age: 42 },
    { firstName: "jack", lastName: "jhon", age: 27 },
    { firstName: "john", lastName: "mick", age: 35 }
];

function filter(empList, key, value) {
    let filterObjList = [];
    for (let i = 0; i < empList.length; i++) {
        let empObj = empList[i];
        if (empObj[key] === value) {
            filterObjList.push(empObj);
        }
    }
    return filterObjList;
}
let result = filter(employeeList, "firstName", "john");
console.log(result);  




