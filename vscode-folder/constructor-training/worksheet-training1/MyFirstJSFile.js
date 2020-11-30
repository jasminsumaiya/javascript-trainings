

function Employee(firstName,lastName,age,gender){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.setAge = function(g){
        this.age = g;
    }
    this.setGender = function(val){
        this.gender = val;
    }
    this.fullName = getFullName;
    function getFullName(){
        return this.firstName + this.lastName;
    }
}
var a1 = new Employee("Jasmin","Sumaiya",25,'female');
var a2 = new Employee("Mohamed","Rizwan",32,'male');

console.log(a1.fullName());
console.log(a1.age);
a1.setAge(30);
console.log(a1.age);
console.log(a2.fullName());


