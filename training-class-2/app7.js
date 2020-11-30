let numArray = [4, 1, 2, 3, 8, 9, 5, 7];
//[16,4,16,]

function myFunction(arr) {
   let outputArr = [];


   for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      if(i%2 == 0){
        outputArr.push(num * num);
      }    
   }

   return outputArr;
}
let resultObj = myFunction(numArray);
console.log(resultObj);

