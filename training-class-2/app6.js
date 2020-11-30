let numArray = [1, 2, 3, 8, 9];
//[23,22,20,17,9]

function myFunction(arr) {
   let outputArr = [];


   for (var i = 0; i < arr.length; i++) {
      let num = 0;
      for (var j = i; j < arr.length; j++) {
         
         num += arr[j];

      }
      outputArr.push(num);

   }

   return outputArr;
}
let resultObj = myFunction(numArray);
console.log(resultObj);

