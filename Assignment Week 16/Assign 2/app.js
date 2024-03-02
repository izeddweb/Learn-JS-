console.log("Assignment 2");

let allImgs = document.querySelectorAll("img");

// test 1 --------- for loop

// for (let i = 0; i < allImgs.length; i++) {
//   if (allImgs[i].hasAttribute("src")) {
//     allImgs[i].setAttribute(
//       "src",
//       "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//     );
//   }
//   if (allImgs[i].hasAttribute("alt")) {
//     allImgs[i].setAttribute("alt", "Elzero Logo");
//   }
//}

// test 2 --------- for loop unary condition

// for (let i = 0; i < allImgs.length; i++) {
//   allImgs[i].hasAttribute("src")
//     ? allImgs[i].setAttribute(
//         "src",
//         "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//       )
//     : "";
//   allImgs[i].hasAttribute("alt")
//     ? allImgs[i].setAttribute("alt", "Elzero Logo")
//     : "";
// }

// test 3 --------- for of

// for (const img of allImgs) {
//   img.hasAttribute("src")
//   ? img.setAttribute(
//       "src",
//       "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//     )
//   : "";
// img.hasAttribute("alt")
//   ? img.setAttribute("alt", "Elzero Logo")
//   : "";
// }

//. test forEach
allImgs.forEach((ele) => {
  ele.hasAttribute("src")
    ? ele.setAttribute(
        "src",
        "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
      )
    : "";
  ele.hasAttribute("alt") ? ele.setAttribute("alt", "Elzero Logo") : "";
});
