console.log("//.    Assignment 1 ");

let num = 9; // "009"
// let num = 20; // "020" //
// let num = 199; // "110"

if (num < 10) {
  console.log("00" + num);
} else if (num < 100) {
  console.log("0" + num);
} else {
  console.log(num);
}

console.log("//.    Assignment.  2");

let num1 = 9;
let str = "9";
let str2 = "20";
console.log(num1 !== str);

if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num1 == str && typeof num1 !== typeof str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 !== str2 && typeof num1 != typeof str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (typeof str == typeof str2 && str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

// Output
// "{num1} Is The Same Value As {str}"
// "{num1} Is The Same Value As {str} But Not The Same Type"
// "{num1} Is Not The Same Value Or The Same Type As {str2}"
// "{str} Is The Same Type As {str2} But Not The Same Value"

console.log("// Assignment      3");

let num11 = 10;
let num2 = 30;
let num3 = "30";

if (
  (num3 > num11 && num3 !== num2) ||
  (num3 > num11 && num3 == num2) ||
  (num3 != num11 && num3 !== num2)
) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As" +
      "\n" +
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type " +
      "\n" +
      "{num3} Value And Type Is Not The Same As {num1} And Type ￼￼I"
  );
}

// Needed Output
// "30 Is Larger Than 10 And Type string Not The Same Type As "
// "30 Is Larger Than 10 And Value Is The Same As 30 And Type "
// "{num3} Value And Type Is Not The Same As {num1} And Type ￼￼I"

console.log("// Assignment      4");

// Edit What You Want Here
num1 = 10;
num2 = 10;
num3 = "10";
let num4 = 20;

// Condition 1
if (num1 >= num2) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2
if (num1 >= num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}
//  Condition 3
if (num1 >= num2 && num1 !== num3) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 4
if (num1 + num2 <= num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 5
if (num1 + !num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 6
if (num1 + num2 + !num3 <= num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 7
if (num4 - (num1 + !num3) + ++num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
