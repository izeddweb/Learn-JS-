console.log("Assignment 1");

// <div id="elzero" class="element" name="js">JavaScript</div>
let div = document.getElementById("elzero")
let div1 = document.getElementsByClassName("element")
let div2 = document.getElementsByName("js")
let div3 = document.getElementsByTagName('div')
let div4 = document.querySelector('.element')
let div5 = document.querySelector('#elzero')
let div6 = document.querySelector('[name="js"]')
let div7 = document.querySelector('[class="element"]')
let div8 = document.querySelector('[id="elzero"]')
let div9 = document.querySelector('div')
let div10 = document.body.firstElementChild
let div11 = document.querySelectorAll('div')
let div12 = document.body.children[0]
let div13 = document.querySelectorAll('#elzero')
let div14 = document.querySelectorAll('.element')
let div15 = document.querySelectorAll('[class="element"]')

console.log(div);
console.log(div1);
console.log(div2);
console.log(div3);
console.log(div4);
console.log(div5);
console.log(div6);
console.log(div7);
console.log(div8);
console.log(div9);
console.log(div10);
console.log(div11);
console.log(div12);
console.log(div13);
console.log(div14);
console.log(div15);