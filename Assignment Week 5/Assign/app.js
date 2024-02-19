// let arr = [10 ,101,30];
// let result =0 ;

// const generateYears = function (numbers) {
//   for (const num of numbers) {
//     result += num
//   }
//   return result
// };
// const finnalResult = generateYears(arr);


// function check ( x) {
//   console.log(x);
//   return  x % 2 === 0 ? "ah ok iven number" :" ah bon c'est odd number";
  
// }

// console.log(check ( finnalResult));


// test regular function
// let names = function (...name){
//     return (`string [${name.join('], [') }] => done !`);  // or return ("string ["+name.join('], [') + "] => done !");
//   }
  
  
  // test arrow function
// let names =  (...name) => (`string [${name.join('], [') }] => done !`);  // or return ("string ["+name.join('], [') + "] => done !");

// console.log(names("zedd","ab","aymen","brahim","ahmed"));// string ["zeddab "],[" aymen"],[" brahim"],["ahmed"] => done !


let numbers = [20 ,50,10,60];
let calc = function (one,two, ...nums){
  return one+two+ +nums
}
// let calc = (one,two, ...nums) => one+two+ +nums

console.log(calc(10,numbers[0],numbers[1]));

















