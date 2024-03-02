console.log("Assignment 5 ");

const images = document.querySelectorAll("img");

//. check function With for of loop

// function checkAttr(arr) {
//   for (const image of arr) {
//     image.hasAttribute("alt")
//       ? image.setAttribute("alt", "Old")
//       : image.setAttribute("alt", "Elzero New");
//   }
// }
// checkAttr(images);

//. check function With forEach

function checkAttr(arr) {
  arr.forEach((element) => {
    element.hasAttribute("alt")
      ? element.setAttribute("alt", "Old")
      : element.setAttribute("alt", "Elzero New");
  });
}
checkAttr(images);
