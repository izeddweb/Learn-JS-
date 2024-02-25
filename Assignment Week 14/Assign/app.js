// Assgnment 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"]; // Elzero

let newMix = mix
  .map((ele) => (typeof ele == "string" ? ele : ""))
  .reduce((acc, curr) => acc + curr);
console.log(newMix);
// Assgnment 2

let myString = "EElllzzzzzzzeroo"; // Elzero

let newMyString = myString
  .split("")
  .filter((ele, index) => {
    return myString.indexOf(ele) === index;
  })
  .join("");
console.log(newMyString);
// Assgnment 3

let myArray = ["E", "l", "z", ["e", "r"], "o"]; // Elzero

let newMyArray = myArray
  .reduce((acc, curr) => {
    return acc.concat(curr);
  }, [])
  .join("");
console.log(newMyArray);

// Assgnment 4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"]; // [-1, -10, 10, 20, -5, -3]

let newNum = numsAndStrings
  .filter((ele) => typeof ele === "number")
  .map((ele) => -ele);
console.log(newNum);
// Assgnment 4

let nums = [2, 12, 11, 5, 10, 1, 99]; // 500

// test 1
// let newNums = nums.reduce((acc,curr)=> {
//   if (curr % 2 != 0) {
//     return acc+ curr
//   }else {
//     return acc * curr
//   }
// },1)

// test 2
// let newNums = nums.reduce((acc,curr)=> {
//   return curr % 2 != 0 ? acc+ curr: acc * curr;
// },1)

// **************$$$$          test best practice
let newNums = nums.reduce(
  (acc, curr) => (curr % 2 != 0 ? acc + curr : acc * curr), 1);

console.log(newNums);
