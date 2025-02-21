// Math: Built-in object that provides a collection of properties and methods

console.log(Math.PI);
console.log(Math.E);

let x = 3.71;
let y = 2;
let z;

Math.round(x);
Math.floor(x);
Math.ceil(x);
Math.trunc(x);      // Truncate: eliminates all decimal portion (same as floor?)
Math.pow(x, y);
Math.sqrt(x);       // Square root
Math.cbrt(x);       // Cube root
Math.log(x);        // Log base e
Math.log10(x);      // Log base 10
Math.hypot(x, y);   // Hypotenuse calculator!
Math.sin(x);
Math.cos(x);
Math.tan(x);
Math.abs(x);        // Absolute value
Math.sign(x);       // Returns -1 if negative, 0 if equal to 0, and 1 if positive
Math.max(x, y, z)   // Returns the largest value in a given range
Math.min(x, y, z)   // Returns the smallest value in a given range