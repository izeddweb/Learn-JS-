console.log("Assignment 6. challenge");

//.  set Variable

let inputNumber =document.querySelector('[type = "number"]')
let inputText =document.querySelector('[type = "text"]')
let create =document.querySelector('[type="submit"]')
let selectText =document.querySelector('select')
let inputColor =document.querySelector('.bg-col')
let result =document.querySelector('.results')

//. set event
inputNumber.addEventListener("focus", reset);
inputText.addEventListener("focus", reset);

create.addEventListener('click',function (event){
  event.preventDefault()
  let ValueInputNUmber = inputNumber.value
  ValueInputNUmber = Number(inputNumber.value)
  let ValueInputText = inputText.value
  let ValueSelct = selectText.value
  let colorBG = inputColor.value

  for (let i = 0; i < ValueInputNUmber; i++) {
    let element = document.createElement(ValueSelct)
    element.style.backgroundColor = colorBG
    let text = document.createTextNode(` ${ValueInputText}- ${i+1} `)
    element.appendChild(text)
    result.appendChild(element)
  }

})
function reset() {
  result.innerHTML = "";
}