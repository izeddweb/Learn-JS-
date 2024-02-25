//.    Assignment 1

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  // console.log(i);
}
// Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100

//.    Assignment 2

let start2 = 10;
let end2 = 0;
let stop = 3;

for (let i = start2; i >= end2; i--) {
  if (i < 10) {
    i = `0${i}`;
    if (i < stop) {
      break;
    }
  }
  // console.log(+i);
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
//.    Assignment 3
let start3 = 1;
let end3 = 6;
let breaker = 2;
for (let i = start3; i <= end3; i++) {
  // console.log(i);
  for (let k = start3; k < end3 - 1; ) {
    k += 1;
    if (k % 2 === 0) {
      // console.log("-- " + k); //.  or  console.log(` --${k}`);
    }
  }
}

//.    solution 2
// for (let i = start3; i <= end3; i++) {
//   console.log(i);
//   for (let k = breaker; k < end3; ) {
//     k += 1;
//     if (k % 2 === 0) {
//       console.log("--" + k); //.  or  console.log(` --${k}`);
//     }
//   }
// }

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

//.    Assignment 4

let i = 10;
let end4 = 6;
let jump = 2;
for (;;) {
  // console.log(i);
  i -= jump;
  if (i <= jump) {
    break;
  }
}
/* 
Output:
10
8
6
4
*/

//.    Assignment 5

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = +false;

for (let i = counter; i < friends.length; i++) {
  if (!friends[i].startsWith(letter.toLocaleUpperCase())) {
    // console.log(`${++counter} => ${friends[i]}`);
  }
}
// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"


//.    Assignment 6
let start6 = 0;
let swappedName = "elZerO";
let result = [];

for (let i = 0; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase() ){
    result.push(swappedName[i].toUpperCase())
  }else {
    result.push(swappedName[i].toLowerCase())
  }
  // console.log(result.join(""));
}
// Output
// ("ELzERo");

//.    Assignment 7
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let newMix =[];

for (let i = start7; i < mix.length; i++) {
  if (typeof mix[i] === "number" && mix[i] !== mix[start7]) {
    console.log(mix[i]);
  }
}
//.  or
for (const i of mix) {
  if (typeof i === "number" && i != mix[start7]) {
    console.log(i);
  }
}


// Output
// 2
// 3
// 4