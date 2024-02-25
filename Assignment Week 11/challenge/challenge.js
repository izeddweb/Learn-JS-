console.log("@@@@@@@@@@@@@@@challenge loop@@@@@@@@@@@@@");

let Admins = ["Ahmed", "Osama", "zedd", "Stop", "Samira"];
let Employers = [
  "Amjad",
  "Amin",
  "Olfa",
  "zakareya",
  "Omar",
  "zorro",
  "zaboza",
  "Ahlem",
];
console.log(" solution 1");
let countEmployer=0

const body = document.body;

let hr = document.createElement("hr");
let divContent = document.createElement("div");
let h2 = document.createElement("h2");
divContent.className = "container";
let divContentText = document.createTextNode( `We Have ${Admins.indexOf("Stop")} Admins`);
h2.append(divContentText);
for (let i = 0; i < Admins.length; i++) {
  if (Admins[i] === "Stop") {
    break;
  }
  let div = document.createElement("div");
  let p = document.createElement("h3");
  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(`The Admin For Team  Is ${Admins[i]} `);
  let pText = document.createTextNode(`Team Members :`);
  div.classList = ` ${Admins[i] } `;
  
  divContent.prepend(div);
  divContent.prepend(h2);
  h3.appendChild(h3Text);
  p.appendChild(pText);
  div.appendChild(h3);
  div.appendChild(p);
  for (let o = 0; o < Employers.length; o++) {
    if (Admins[i][0] === Employers[o][0]) {
      countEmployer += 1
      let paraEmployer = document.createElement("p");
      let textEmp = document.createTextNode(`- ${countEmployer} ${Employers[o]} `);
      paraEmployer.appendChild(textEmp);
      div.appendChild(paraEmployer);
    }
  }
}
body.prepend(divContent);

console.log(" solution 2");
// let countAdmin = 0;
// let countEmployer = 0;
// document.write(` <h3> We Have X Admins</h3>`);
// document.write(`<h3> We Have ${Admins.indexOf("Stop")} Admins</h3>`);
// document.write(` <hr> `);
// for (let i = 0; i < Admins.length; i++) {
//   if (Admins[i] === "Stop") {
//     break;
//   }
//   countAdmin += 1;
//   document.write(`<div>  `);
//   document.write(`<h4>The Admin For Team ${countAdmin} Is ${Admins[i]}</h4> `);
//   document.write(`<h5> Team Members :</h5>`);
//   for (let o = 0; o < Employers.length; o++) {
//     if( Admins[i][0] === Employers[o][0]){
//       countEmployer += 1
//       document.write(`<p> - ${countEmployer} :${Employers[o]}</p>`);
//     }
//   }
//   document.write(`<hr> `);
//   document.write(`</div>  `);
// }


























