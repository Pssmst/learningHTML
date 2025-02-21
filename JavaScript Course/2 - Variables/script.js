/*
Variable:
    - A container that stores a value
    - Behaves as if it were the value it contains
    - YOU KNOW WHAT A VARIABLE IS

1. Declaration      let x;
2. Assignment       x = 100;
*/

let x;
// If you declared another variable named x, it would be bad (variable names gotta be unique)
x = 100;
console.log(x);

// You can also declare and assign a variable at the same time
let y = 123;
console.log(y);


// INTEGERS /////////////////////////////////////////////////////////////////////////////////////////////////

let age = 25;
let price = 10.99;
let gpa = 2.1;

console.log(age);
console.log(price);
console.log(gpa);

// To include variables in strings (like a Python f-string), you use template literals (backticks)
console.log(`You are ${age} years old.`);
console.log(`The price is $${price}.`)
console.log(`Your GPA is ${gpa}.`)

// To display the datatype of a variable, just use the typeof keyword
console.log(typeof age);    // number
console.log(typeof price);  // number
console.log(typeof gpa);    // number


// STRINGS /////////////////////////////////////////////////////////////////////////////////////////////////

let firstName = "Pessimist512"; // Strings can include characters blah blah blah you know this
console.log(typeof firstName);
console.log(firstName);
console.log(`My first name is ${firstName}.`);

let favoriteFood = "pizza";
console.log(typeof favoriteFood);
console.log(favoriteFood);
console.log(`My favorite food is ${favoriteFood}.`);

let email = "pessimist@gmail.com";
console.log(typeof email);
console.log(email);
console.log(`My email is ${email}.`);


// BOOLEANS ////////////////////////////////////////////////////////////////////////////////////////////////

let online = true;
console.log(typeof online);
console.log(`You are online: ${online}`)

let forSale = false;
console.log(typeof forSale);
console.log(`The item is for sale: ${forSale}`)

let isStudent = true;
console.log(typeof isStudent);
console.log(`Student is enrolled: ${isStudent}`)


// Let's display our variables now /////////////////////////////////////////////////////////////////////////

let fullName = "Brannon Davidson";
let myAge = 17;
let student = true;

document.getElementById("name").textContent = `My name is ${fullName}.`;
document.getElementById("age").textContent = `I am ${myAge} years old.`;
document.getElementById("student").textContent = `I am currently a student: ${student}.`;