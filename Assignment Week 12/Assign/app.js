//.   Assignment 1

//. solution 1
// function sayHello(theName, theGender) {
//   // Your Code Here
//   if(theGender === "Male") {
//     return `Hello Mr ${theName} `
//   }else if (theGender === "Female"){
//     return `Hello Miss ${theName} `
//   }else{
//     return ` Hello ${theName}`
//   }
// }

//. solution 2
function sayHello(theName, theGender) {
  // Your Code Here
  return theGender === "Male"
    ? `Hello Mr ${theName}`
    : theGender === "Female"
    ? `Hello Miss ${theName}`
    : `Hello ${theName}`;
}
// Needed Output
// console.log(sayHello("Osama", "Male")); // "Hello Mr Osama");
// console.log(sayHello("Eman", "Female")); // "Hello Miss Eman"
// console.log(sayHello("Sameh")); // "Hello Sameh"

//.   Assignment 2

function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  let result = 0;
  
  if (operation == "add" || operation == undefined) {
    if (secondNum == undefined) {
      return result = "Second Number Not Found";
    }
    return result = firstNum + secondNum;
  }
  else if (operation === 'subtract' ){
    return result = firstNum - secondNum
  }else if (operation === 'multiply' ){
    return result = firstNum * secondNum
  }
}

// Needed Output
// console.log(calculate(20)); // Second Number Not Found
// console.log(calculate(20, 30));; // 50
// console.log(calculate(20, 30, "add"));; // 50
// console.log(calculate(20, 30, 'subtract'));; // -10
// console.log(calculate(20, 30, 'multiply'));; // 600

//.   Assignment 3

//. solution 1
function createSelectBox(startYear, endYear) {
  // Write Your Code Here
  document.write(`<select>`);
  for (i = startYear; i <= endYear; i++) {
      document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
//. solution 2

// set variable

const body = document.body;
const select = document.createElement('select')
//.  set function 

function createSelectBox(startYear, endYear) {
  // Your Code Here
  for (let i = startYear; i <= endYear; i++) {
    const selectOption = document.createElement("option")
    let textOption = document.createTextNode(` ${i}`)
    selectOption.setAttribute("value",` ${i}`)
    selectOption.appendChild(textOption)
    select.appendChild(selectOption)
  }
  body.appendChild(select)
}
createSelectBox(2000, 2011);

//.   Assignment 4

function multiply( ...arg) {
  let resultFunction = 1;
  for (const num of arg) {
    if( typeof num === "number"){
      resultFunction *= Number(Math.floor(num))
    }
  }
  return resultFunction
}

// console.log(multiply(10, 20));; // 200
// console.log(multiply("A", 10, 30));; // 300
// console.log(multiply(100.5, 10, "B"));; // 1000


//.   Assignment 4
















