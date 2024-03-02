console.log("Assignment 4");


//. set Variable
let divs = document.querySelectorAll('div')

function getValue(getClass){
  let index = 0;
  getClass.forEach(element => {
    let value = element.getAttribute('class')
    index++
    if (element.hasAttribute('title')) {
      element.setAttribute('title',value);
      if (element == divs.item(1)) {
        return element.textContent = ` ${value} ${index} `
      }
      return element.textContent = ` ${value} `
    }
  });
}
getValue(divs)

// // Creating Variables
// let firstDiv = document.querySelector(".one");
// let secDiv = document.querySelector(".two");
// let secTitle = secDiv.title;
// let secTxt = secDiv.innerHTML;
// console.log(secTitle);
// console.log(secTxt);

// // Switching Attributes
// secDiv.title = firstDiv.title;
// firstDiv.title = secTitle;

// // Switching Content
// secDiv.innerHTML = `${firstDiv.innerHTML} ${
//     document.getElementsByTagName("div").length
// }`;
// firstDiv.innerHTML = secTxt;












