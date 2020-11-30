//string is palindrome
//output true or false
function chechPattern(inputStrng) {
    for (var i = 0; i < inputStrng.length / 2; i++) {
        let startChar = inputStrng.charAt(i);
        let endChar = inputStrng.charAt(inputStrng.length-1 - i);
        if (startChar != endChar){
            return false;
        }
    }
    return true;
}
var result = chechPattern('liril');
console.log(result);