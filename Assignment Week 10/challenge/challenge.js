console.log(". //.  Challenge  1");

let a = 8;

if (a < 10) {
  console.log("10");
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("I' dont Know");
}
//.   changing to tenary if syntax
a < 10
? console.log("10")
: a >= 10 && a <= 40
? console.log("10 to 40")
: a > 40
? console.log("> 40")
: console.log("I' dont Know");

console.log(". //.  Challenge  2");

let st = "Elzero Web School"

if ( String(st.length *2) === "34"){
  console.log("good");
}
if ( st.includes("w") === "w"){
  console.log("good");
}
if ( st.length !== "String"){
  console.log("good");
}
if (typeof st.length === "number"){
  console.log("good");
}
if ( st.slice(0,6).repeat(2) === "ElzeroElzero"){
  console.log("good");
}

  console.log(st.split(" ").slice(1,2));