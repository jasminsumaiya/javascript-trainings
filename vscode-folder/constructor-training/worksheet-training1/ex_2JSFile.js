

function Person(name, dob) {
     this.name = name;
     this.birthday = new Date(dob);
     this.calculateAge = function(){
         const diff = Date.now() - this.birthday.getTime();
         const dateObj = new Date(diff);
         return dateObj.getFullYear() - 1970;
         
     }
}
const rizwanObj = new Person('rizwan','02-11-1993');
console.log(rizwanObj.calculateAge());



