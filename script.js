/*let js = "amazing";
console.log(40 + 8 + 20 - 10);

console.log("Deji");
console.log(23);

let firstName = "Deji";
console.log(firstName);
console.log(firstName);
console.log(firstName);
let PI = 3.1415;

let myFirstJob = "Drummer";
let myCurrentJob = "Developer and Designer";*/

/*let javascriptsIsFun = true;
console.log(javascriptsIsFun);*/

/*const now = 2022;
const ageDeji = now - 1996;
const ageAdeoye = now - 1995;
console.log(ageDeji, ageAdeoye);

console.log(ageAdeoye * 2, ageDeji / 10, 2 ** 3);

const firstName = "Ayodeji";
const lastName = "Hamzat";
console.log(firstName + " " + lastName);*/

/*//Assignment and Mathematical Operators
let x = 10 + 5;
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 = 100
x++; //x = x + 1 = 101
x--; //x = x - 1 = 100
console.log(x);

//Comparison Operators
console.log(ageAdeoye > ageDeji); //< > <= >=
console.log(ageDeji <= 18);

const isFullAge = ageDeji >= 18;

console.log(now - 1995 > now - 2006);*/

/*console.log(ageAdeoye > ageDeji); //< > <= >=
console.log(ageDeji <= 18);

const isFullAge = ageDeji >= 18;

console.log(now - 1995 > now - 2006);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageDeji + ageAdeoye) / 2;
console.log(ageAdeoye, ageDeji);*/

// const markMass = 78;
// const markHeight = 1.69;

// const johnMass = 92;
// const johnHeight = 1.95;

/*const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = johnBMI > markBMI;

console.log(markBMI, johnBMI);

console.log(markHigherBMI);*/

/*const firstName = "Ayodeji";
const job = "designer";
const birthYear = 1996;
const year = 2022;

const ayodeji =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(ayodeji);

const ayodejiNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(ayodejiNew);

console.log(`string
with
multiple
lines`);*/

/*const age = 12;

if (age >= 18) {
  console.log("Daniel can start driving 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Daniel is too young and has ${yearsLeft} years before he starts driving`
  );
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);*/

/*const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = johnBMI > markBMI;

console.log(markBMI, johnBMI);

console.log(markHigherBMI);

if (johnBMI > markBMI) {
  console.log(`John's BMI is higher than Mark's!`);
} else {
  console.log(`Oops, Mark's BMI is higher!`);
}

if (johnBMI > markBMI) {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
} else {
  console.log(`Oops, Mark's BMI, ${markBMI} is higher!`);
  const inputYear = "1996";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
}*/

/*const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course");
    console.log("Attend standup meeting");
    break;
  case "tuesday":
    console.log("Portfolio work");
    break;
  case "wednesday":
  case "thursday":
    console.log("Record playlist audio");
    break;
  case "saturday":
  case "sunday":
    console.log("Chop the life of your head");
    break;
  default:
    console.log("Omo, no day dey today");
}*/

/* const age = 24;
age >= 18
  ? console.log("I love to shayo, gimme henny")
  : console.log("My mama go beat me, I go drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

console.log(`I'll love to drink ${age >= 18 ? "wine" : "water"}`); */

// for (let i = 0; i < 5; i++) {
//   console.log("in loop:", i);
// }

// console.log("loop finished");

// const names = ["shaun", "mario", "deji"];

// for (let i = 0; i < names.length; i++) {
//   // console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

// const names = ["shaun", "mario", "deji"];

// let i = 0;

// while (i < 5) {
//   console.log("in loop:", i);
//   i++;
// }

// const names = ["shaun", "mario", "deji"];

// let i = 0;

// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// let i = 5;

// do {
//   console.log("val of i is: ", i);
//   i++;
// } while (i < 5);

// write a function that returns the name of the author in a string sample

// const quote = `“A goal is just a dream with a deadline.” – Drake
// `

// returns: Drake

// const quote = `"The unexamined life is not worth living." - Socrates`

// returns: Socrates

//name of author
// const authorOne = "Drake";
// const authorTwo = "Socrates";
// const authorOne = "'Drake'";

// const quote = "A goal is just a dream with a deadline. - Drake";

// function drake(quote) {
//   var n = quote.split(" ");
//   return n[n.length - 1];
// }

// console.log(drake(quote));

// const quotes = "The unexamined life is not worth living. - Socrates";

// function socrates(quotes) {
//   var n = quotes.split(" ");
//   return n[n.length - 1];
// }

// console.log(socrates(quotes));

//First One
const quote1 = "A goal is just a dream with a deadline. - Drake";

function drake(quote1) {
  var n = quote1.split(" ");
  return n[n.length - 1];
}

console.log(drake(quote1));

const quote2 = "The unexamined life is not worth living. - Socrates";

function socrates(quote2) {
  var n = quote2.split(" ");
  return n[n.length - 1];
}

console.log(socrates(quote2));

//Second One
const vowelOrConsonant = (someString, position) => {
  let vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(someString[position].toLowerCase())
    ? "vowel"
    : "consonant";
};

console.log(vowelOrConsonant("hello", 4)); // consonant
console.log(vowelOrConsonant("cat", 2)); // vowel
