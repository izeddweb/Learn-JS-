console.log("&&&&&&&&&&& challenge");

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let solution = myString
  .split(",")
  .filter((ele) => {
    return isNaN(ele);
  })
  .join("")
  .replaceAll("_", " ")
  .slice(true, length - true);

// let solution = myString
//   .split(",")
//   .filter((ele) => {
//     return isNaN(ele);
//   })
//   .join("")
//   .replaceAll("_", " ")
//   .slice(true, length - true);

// let solution = myString
//   .split(",")
//   .filter((el) => (isNaN(el)))
//   .map((el) =>
//     el === "_"
//       ? " "
//       : el === myString[myString.length - true]
//       ? ""
//       : el[el.length - el.length]
//   )
//   .reduce((acc, curr) => `${acc}${curr}`);

// let lettre = myString[myString.length-1]
// let solution = myString.split(',').filter(function(ele) {
//   return isNaN(ele)  && ele !== (lettre)
// }).reduce(function(acc,current) {
//   return acc + current
// }).slice(true).replaceAll('_',' ')

console.log(solution);

let arr = [1, 2, 3, 4, 5];
let result = [];
function minMax (arr){
	for (const data of arr) {
    data > data?console.log(data):console.log("ok");
  }


}
console.log(minMax(arr)); // [1, 5]
console.log(result);