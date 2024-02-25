//.   Assignment 1
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    newName = zName.split(" ");
    return `${newName[0]} ${newName[1][0].toUpperCase()}. `;
  }
  function ageWithMessage(zAge) {
    return parseInt(zAge);
  }
  function countryTwoLetters(zCountry) {
    return zCountry.slice(0, 2).toUpperCase();
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(
      zAge
    )}, You Live In ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG
console.log(getDetails("Zedd ab", "40 Is My Age", "tunisie"));
//. Hello Zedd A. , Your Age Is 40, You Live In TU
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

//.   Assignment 2

function itsMe() {
  return `Iam A Normal Function`;
}

itsMeArrow = () => `Iam A Arrow Function`;

console.log(itsMe()); // Iam A Normal Function
console.log(itsMeArrow()); // Iam A Arrow Function

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

urlCreateArrow = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
console.log(urlCreateArrow("https", "elzero", "org")); // https://www.elzero.org

// Assignment 3
// Assignment 4
// function specialMix(...data) {
//   // Your Code Here
//   let result = 0 ;
//   for (let i = 0; i < data.length; i++) {
//     if (isNaN(parseInt(data[i])) ) {
//       continue
//     }else{
//       result += Number(parseInt(data[i]))
//     }
//   }
//   if (result == 0) {
//     result = 'All'
//   }
//   return result
// }


function specialMix(...data) {
  // Your Code Here
  let result = 0 ;
  for (const dataInfo of data) {
    if (isNaN(parseInt(dataInfo)) ) {
      continue
    }else{
      result += Number(parseInt(dataInfo))
    }
  }
  if (result == 0) {
    result = 'All Is Strings'
  }
  return result
}


console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
