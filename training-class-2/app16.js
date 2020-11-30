//output => sum of abc
/*myObj = {
        a:10,
        b:11.....
    }*/
function myFunction(inputString,srtVal){
    let myObj = {};
    let characters = ['a','b','c','d','e','f','g'];
    characters.forEach((char) => {
        myObj[char] = srtVal;
        srtVal = srtVal + 1;
    });
    

    let newVal = 0;
    for (var i=0; i<inputString.length;i++){
        let stringVal = inputString[i];

       if(myObj[stringVal] != undefined){
        newVal = newVal + myObj[stringVal];
       }
    }
    return newVal;
}
let result = myFunction('abc', 10);
console.log(result);