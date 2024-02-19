//.      ****************** Assignment  1

console.log(10e4); //.  1000000
console.log(10 ** 5); //.  1000000
console.log(10 ** 2 * 10 ** 3); //.  1000000
console.log(100000); //.  1000000
console.log(100_000); //.  1000000
console.log(5e4 + 5e4); //.  1000000
console.log(10 ** 2 * 10e2); //.  1000000
console.log(1000 * 10e1); //.  1000000
console.log(1_000 * 10e1); //.  1000000

//.      ****************** Assignment  2

console.log( Number.MAX_SAFE_INTEGER); // 9007199254740991

//.      ****************** Assignment  3

console.log("MAX_SAFE_INTEGER".length);

//.      ****************** Assignment  4

let myVar = "100.56789 Views";
console.log( Math.floor(parseInt(myVar))); // 100 
console.log(Number(Number(myVar.slice(0,9)).toFixed(2))); // 100.57
//.      ****************** Assignment  5


let num = 10 ;

console.log(true +Number.isInteger(num));
console.log( true +!isNaN(num));
//.      ****************** Assignment  6

let flt = 10.4;
console.log( Math.floor(flt)); // 10 
console.log( Math.trunc(flt)); // 10 
console.log( Math.round(flt)); // 10 
console.log( parseInt(flt)); // 10 
console.log( Number(flt.toFixed(0))); // 10

//.      ****************** Assignment  7

console.log(Math.floor(Math.random()* 5));

