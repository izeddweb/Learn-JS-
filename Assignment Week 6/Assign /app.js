//.   Assignment 1

let userName = "Elzero";

console.log(userName.charAt(0).toLowerCase()); //. e
console.log(userName.substring(0, 1).toLowerCase()); //. e
console.log(userName.substr(0, 1).toLowerCase()); //. e
console.log(userName.substr(0, 1).toLowerCase()); //. e
console.log(userName.slice(-length, length - 5).toLowerCase()); //. e
console.log(userName.slice(0, 1).toLowerCase().repeat(3)); //. e

//         Assignment 2

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
