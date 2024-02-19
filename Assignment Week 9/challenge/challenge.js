//.    switch challenge

let job = "IT";
let salary = 0;

if (job === "manager") {
  salary = 8000;
  console.log(` i'm a " ${job} " my salary is ${salary} `);
} else if (job === "IT" || job === "support") {
  salary = 6000;
  console.log(` i'm a " ${job} " my salary is ${salary} `);
} else if (job === "developper" || job === "designer") {
  salary = 7000;
  console.log(` i'm a " ${job} " my salary is ${salary} `);
} else {
  salary = 4000;
  console.log(` i'm a " ${job} " my salary is ${salary} `);
}

switch (job) {
  case "manager":
    salary = 8000;
    console.log(` i'm a " ${job} " my salary is ${salary} `);
    break;
  case "IT":
  case "support":
    salary = 6000;
    console.log(` i'm a " ${job} " my salary is ${salary} `);
    break;
  case "developper":
  case "designer":
    salary = 7000;
    console.log(` i'm a " ${job} " my salary is ${salary} `);
    break;
  default:
    salary = 4000;
    console.log(` i'm a " ${job} " my salary is ${salary} `);
}

//. if condition
let holiday = 0;
let money = 0;

switch (holiday) {
  case 0:
    money = 5000;
    console.log(`my money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`my money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`my money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`my money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`my money is ${money}`);
    break;

  default:
    money = 0;
    console.log(`my money is ${money}`);
}

if (holiday == 0) {
  money = 5000;
  console.log(`my money is ${money}`);
} else if (holiday == 1 || holiday == 2) {
  money = 3000;
  console.log(`my money is ${money}`);
} else if (holiday == 3) {
  money = 2000;
  console.log(`my money is ${money}`);
} else if (holiday == 4) {
  money = 1000;
  console.log(`my money is ${money}`);
} else {
  money = 0;
  console.log(`my money is ${money}`);
}
