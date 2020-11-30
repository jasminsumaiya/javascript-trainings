//array.filter & map in [array of numbers]

const numArray = [5,7,12,9,18,11];
const newNumArray = numArray.filter(num => num%3 == 0);
const mapedArray = newNumArray.map(num => num * 10);
console.log(newNumArray);
console.log(mapedArray);