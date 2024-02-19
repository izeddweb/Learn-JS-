// challenge string
console.log("@@@@@@@@@@@@@@@@@. challenge string");
let a = "Elzero Web School";

//. include this methode in your solution [ slice , charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero
console.log(a.slice(2, 3).toUpperCase() + a.slice(3, 6)); // Zero

//. 8 H
console.log(a.slice(-4, -3).toUpperCase().repeat(8)); // HHHHHHHH

function findRepeat(char) {
  if (a.includes(char)) {
    char.repeat(8);
  }
  return char.repeat(8).toUpperCase();
}
console.log(findRepeat("h"));

// return array
console.log(a.slice(0, 6).split()); // [Elzero]

// use only "substr" methode + template literals in your solution
console.log(` ${a.substr(0, 6)} ${a.substr(-6)} `); // Elzero School

//.  solution must be Dynamic and may change
console.log(
  a.slice(0, 1).toLowerCase() +
    a.slice(1, length - 1).toUpperCase() +
    a.slice(length - 1).toLowerCase()
); // eLZERO WEB SCHOOl
