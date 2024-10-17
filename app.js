// chapter 38 to 42

// 1.
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return year + " is a leap year.";
//     } else {
//         return year + " is not a leap year.";
//     }
// }

// var year = +prompt("Enter a year:");
// alert(isLeapYear(year));

// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
    
//     return -1;
// }

// var myString = "JavaScript";
// var characterToFind = 'p';
// var index = customIndexOf(myString, characterToFind);
// console.log("Index of '" + characterToFind + "' is: " + index);  


// 3.
// function removeVowels(sentence) {
//     var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
//     var result = "";

//     for (var i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }
    
//     return result; 
// }

// var sentence = "This is an example.";
// var noVowels = removeVowels(sentence);
// console.log(noVowels); 


// function countOccurrences(str, letter) {
//     var count = 0; 

//     for (var i = 0; i < str.length; i++) {

//         if (str[i] === letter) {
//             count++;
//         }
//     }

//     return count;
// }

// var exampleString = 'JSResourceS.com';
// var letterToFind = 'o';
// var occurrences = countOccurrences(exampleString, letterToFind);
// console.log("The letter '" + letterToFind + "' appears " + occurrences + " times.");  




// function showImageAlert(Mobile){
//     alert("Thanks for purchasing a phone for us",Mobile)
// }