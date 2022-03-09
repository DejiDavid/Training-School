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
