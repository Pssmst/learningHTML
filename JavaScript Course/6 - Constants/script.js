// const: a variable that can't be changed

// You don't want people to maliciously change the value of this variable, so you make it a const
// Also, a naming convention for const numbers & booleans is fully capitalizing them
const PI = 3.14159;
let radius;
let circumference;

// Prompt
radius = window.prompt("Enter the radius of a circle: ");
radius = Number(radius); // Convert to number
circumference = 2 * PI * radius;
console.log(circumference);

// Dynamic
document.getElementById("button1").onclick = function() {
    radius = document.getElementById("textbox1").value;
    circumference = 2 * PI * radius;
    document.getElementById("p1").textContent = `The cirumference of the circle is ${circumference} units.`
}