//for into forEach  (insted of using for)(or)
//string into array

function myFunction(inputStr) {
    let myObj = {};

    Array.from(inputStr).forEach(char => {
        if (myObj[char] == undefined) {
            myObj[char] = 0;
        }
        myObj[char]++
    });

    return myObj;
}
let result2 = myFunction('jameeja');
console.log(result2);