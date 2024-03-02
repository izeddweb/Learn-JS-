// console.log("Assignment 1");
// // Create Your Object Here
// const member = {
//   name: "zedd",
//   age: 40,
//   country: "Egypt",
//   fullDetails: function () {
//     return `My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country} `;
//   },
// };

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt

// console.log("Assignment 2");

// // Method One
// // Create Your Object Here
// let objMethodOne = {
//   property: "Method One",
//   methodOne: function () {
//     return this.property;
//   },
// };
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here
// let objMethodTwo = new Object({
//   property: "Method Two",
//   methodOne: function () {
//     return this.property;
//   },
// });
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
// let objMethodThree = Object.create({
//   property: "Method Three",
//   methodOne: function () {
//     return this.property;
//   },
// });
// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.assign({
//   property: "Method Four",
//   methodOne: function () {
//     return this.property;
//   },
// });
// console.log(objMethodFour.property); // "Method Four"

// console.log("Assignment 3");

// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line
// const finalObject = Object.assign({}, { a }, threeNums, twoNums);

// console.log(finalObject); // {a: 1,b: 2,c: 3,d: 4,e: 5,f: 6}
// console.log("Assignment challenge");

// // The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;

// //.  test 1
// for (const propObj in myFavGames) {
//   console.log(`The Game Name Is ${[propObj]}`);
//   console.log(`The Publisher Is ${myFavGames[propObj].publisher}`);
//   console.log(`The Price Is ${myFavGames[propObj].price}`);

//   if (myFavGames[propObj].bestThree) {
//     console.log(`First => ${myFavGames[propObj].bestThree.one}`);
//     console.log(`Second => ${myFavGames[propObj].bestThree.two}`);
//     console.log(`Third => ${myFavGames[propObj].bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }

//.  test 1
// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
//   console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
//     console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
//     console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }

// for test

// let test = {
//   a: "apple",
//   b: "ball",
//   c: "cat",
//   d: "doll",
//   e: "elephant",
// };
// console.log(Object.values(test));

// const object1 = {
//   a: 'somestring',
//   b: 42,
// };

// for (const [key, value] of Object.entries(object1)) {
//   console.log(key);
//   console.log(value);
//   console.log(`${key}: ${value}`);
// }

// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 5 },
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 5 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];
// const result = Object.groupBy(inventory, ({ name }) => (name));
// console.log(result);

// function addUp(num) {
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i
//   }
//   return result
// }

// console.log(addUp(4)); // 10
// console.log(addUp(13)); // 91
// console.log(addUp(600)); // 180300

// function seriesResistance(arr) {
//   let result = 0;
//   for (const data of arr) {
//     result += data
//   }
//   return result <= 1 ? result = ` ${result} ohm`:result = ` ${result} ohms`;
// }

// function seriesResistance(arr) {
//   let result = 0 ;
//   arr.forEach(element => {
//     result += element
//   });

//   return result <= 1 ? result = `${result} ohm`:result = `${result} ohms`;
// }

// function seriesResistance(arr) {
//   let result = arr.reduce((acc,curr) =>{
//     return acc+curr
//   })
//   return result <= 1 ? result = `${result} ohm`:result = `${result} ohms`;
// }
// console.log(seriesResistance([1, 5, 6, 3])); // "15 ohms"
// console.log(seriesResistance([16, 3.5, 6])); // "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5])); // "1.0 ohm"

// function binary(decimal) {
// 	return decimal.toString(2);
// }

// function binary(decimal) {
// 	let result = "";
// 	if (decimal == 0) {
// 		result = "0";
// 	}
// 	while (decimal > 0) {
// 			result += decimal % 2;
//       console.log(decimal % 2);
//       console.log(result );
// 			decimal = Math.floor(decimal/2);
// 		};
// 	return result.split("").reverse().join("");
// }

// binary = d =>(d >> 0).toString(2)

// console.log(binary(0));
// console.log(binary(5));
// console.log(binary(5));
// console.log(binary(10));
// console.log(binary(15));
// console.log(binary(99));
// console.log(binary(112));

// function canNest(arr1, arr2) {
//   let min = Math.min(...arr1);
//   let max = Math.max(...arr1);
//   for (const num of arr2) {
//     if (min > Math.min(...arr2) & max < Math.max(...arr2)) {
//       console.log(true);
//     }else {
//       console.log(false);
//     }
//   }
// }
// canNest([1, 2, 3, 4], [0, 6]) // true
// canNest([3, 1], [4, 0]) // true
// canNest([9, 9, 8], [8, 9]) // false
// canNest([1, 2, 3, 4], [2, 3]) // false
// function timeForMilkAndCookies(date) {
//   const dateYear = birthday.getFullYear();
//   const dateMonth = birthday.getMonth();
// 	console.log(dateYear,dateMonth);
// }

// timeForMilkAndCookies(new Date(2013, 11, 24)); // true
// timeForMilkAndCookies(new Date(2013, 0, 23)); // false
// timeForMilkAndCookies(new Date(3000, 11, 24)); // true

// const birthday = new Date(2013, 11, 24);
// const dateYear = birthday.getFullYear();
// const dateMonth = birthday.getMonth();

//Expected output: 19

// function whichIsLarger(f, g) {
// 	let result ;
// 	console.log(f,g);
// 	console.log(f > g);
// 	console.log(f < g);
// 	console.log();

// 	if (f > g){
// 		result =  "f"
// 	}else if (f < g){
// 		result = "g"
// 	} else {
// 		result =  "neither"
// 	}
// 	return result
// }

// console.log(whichIsLarger(() => 5, () => 25) );// "g"
// console.log(whichIsLarger(() => 25,  () => 25)); // "neither"
// console.log(whichIsLarger(() => 505050, () => 500050)); // "f"

// exe. 33 ,98

//.    Math.round(Math.random() * (max - min)) + min
console.log(Math.round(Math.random() * (98 - 33)) + 33);

