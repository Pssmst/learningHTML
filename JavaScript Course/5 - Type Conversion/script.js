/*
Type Conversion:
    - Changes the datatype of a value to another
    - (strings, numbers, booleans)
*/

let age = window.prompt("How old are you?");
age += 1;
console.log(age, typeof age);
// Because we are asking the user for a STRING, the program will LITERALLy append a "1" to the input string
// i.e. An age of 8 will become 81 instead of 9

let age2 = window.prompt("How old are you?");
age2 = Number(age2);
age2 += 1;
console.log(age2, typeof age2);
// This DOES work, because we convert the string into a number before adding to it numerically

// Weird conversions
console.log(Number("pizza"));   // string into number:  NaN
console.log(Boolean("pizza"));  // string into boolean: true

console.log(String(5));         // number into string:  "5"
console.log(Boolean(5));        // number into boolean: true

console.log(Number(true));      // boolean into number: 1
console.log(String(true));      // boolean into string: true

console.log(Number("0"));       // string (that looks like a number) into number: 0
console.log(Number("23.3"));    // string (that looks like a number) into number: 23.3