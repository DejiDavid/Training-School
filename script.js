/* Create a JavaScript page
display type and version of browser
alert method to display message to user
request and capture user input
confirm method
customize page for user
store user’s name in variable
personalize user’s visit
display alert dialog box*/

console.log(navigator.userAgent);

alert("Hi, welcome to the test portal");

const userName = prompt("What is your name?");

const userAge = prompt("How old are you?");

confirm(`Hello, are you ${userName} and ${userAge} years of age?`);
alert(`Hello ${userName}, you are ${userAge} years old`);
