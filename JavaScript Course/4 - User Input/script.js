/*
How to accept user input:
    1. EASY WAY = Window Prompt
    2. PROFESSIONAL WAY = HTML textbox
*/

// EASY WAY //////////////////////////////////////////////////////////////////////////////////////////////

let username1;
username1 = window.prompt("What's your username?");

console.log(username1);
document.getElementById("p1").textContent = `Welcome, ${username1}.`;


// PROFESSIONAL WAY //////////////////////////////////////////////////////////////////////////////////////

let username2;
// When making a single-use function to be executed by an element, you don't really have to give it a name
document.getElementById("button1").onclick = function() {
    // Gets the text inside the textbox
    username2 = document.getElementById("textbox1").value;
    console.log(username2);
    document.getElementById("p2").textContent = `Welcome, ${username2}.`;
}