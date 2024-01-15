//     $$$$$$$$$$$$$$$$$$$ Assignment 1

//.  code 1 Will Be Not Excuted Because The Element Not Created Yet
//.  code 2 Will Be Excuted Because The Function onload
//.  code 3 Will Be Excuted Because The Script in Rigth Place After Create Element

//     $$$$$$$$$$$$$$$$$$$ Assignment 2

//.   create elements
let body = document.body;
let heading = document.createElement("h2");
let headingText = document.createTextNode("Zedd");
//. append elements to body
heading.appendChild(headingText);
body.appendChild(heading);

//.    styling elements
heading.style.color = "blue";
heading.style.fontSize = "80px";
heading.style.fontWeight = "bold";
heading.style.textAlign = "center";
heading.style.fontFamily = "Arial";

//     $$$$$$$$$$$$$$$$$$$ Assignment 3

console.log(
  " Luffy The %c King %c Pirate",
  "color:red;font-weight:bold;font-size:40px;",
  "background:blue;"
);
//     $$$$$$$$$$$$$$$$$$$ Assignment 4

console.group("group 1");
console.log("msg number 1");
console.log("msg number 2 ");
console.group("nested group ");
console.log(" nested msg number3");
console.log(" nested msg number 4");
console.group("nested group ");
console.log(" nested msg number 5");
console.log(" nested msg number 6");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("group 2");
console.log("msg number 7");
console.log("msg number 8");
console.groupEnd();
//     $$$$$$$$$$$$$$$$$$$ Assignment 5

console.table(["zedd", "ab", "luffy", "zorro", "robine"]);

//     $$$$$$$$$$$$$$$$$$$ Assignment 6.  Method 1
//     ***********  Method 1

// console.log("Iam In Console");
// document.write("Iam In Page");

//     ***********  Method 2

/*
console.log("Iam In Console");
document.write("Iam In Page");
*/