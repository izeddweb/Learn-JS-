console.log(". //              Assign 1");

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(false, num)); // ["Ahmed", "Elham", "Osama"];

//.  or
// Method 3
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

console.log(". //              Assign 2");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
// Write Your Code Here
friends.pop();
friends.shift();
console.log(friends); // ["Eman", "Osama"]

console.log(". //              Assign 3");

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr.push(arrTwo.concat(arrOne).reverse());
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log(". //              Assign 4");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO

console.log(". //              Assign 5");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
// sollution 1
console.log(haystack.includes(needle));
// sollution 2
console.log(haystack.indexOf(needle));
// sollution 3
console.log(haystack.lastIndexOf(needle));

// sollution 4
function find(X) {
  haystack.map(ele => {
    if (ele === X){
      console.log(ele , "found");
    }
  })
}
find(needle)

console.log(". //              Assign 6");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs.push(arr1.slice(2).concat(arr2.slice(2)));

console.log(allArrs.toString().replaceAll(",","").toLowerCase()); // fxy