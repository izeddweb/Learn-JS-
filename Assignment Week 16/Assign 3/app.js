console.log("Assignment 3");

// set variable
const input = document.querySelector("form input");
const result = document.querySelector("form div");

// set event
input.addEventListener("input", getValue);

//.  set function      test 1
function getValue() {
  let inputValue;
  let resultConvert;
  inputValue = Number(input.value);
  resultConvert = (+inputValue * 15.6).toFixed(2);
  //.  draw result
  result.innerHTML = ` {${resultConvert}} USD Dollar = {${inputValue}} Egyptian Pound`;
}
