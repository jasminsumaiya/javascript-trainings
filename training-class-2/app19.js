// can contain vowels
function hasContainVowelCare(input) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < input.length; i++) {
        var vowel = input[i];
        if (vowels.indexOf(vowel) >= 0) {
            return true
        }
    }
    return false;
}
var myName = "sumaiya";
var result = hasContainVowelCare(myName);
console.log(result);
