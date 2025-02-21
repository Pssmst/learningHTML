// We can put elements into variables as to not clutter up everything
const countLabel = document.getElementById("countLabel");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

// Start at 0 by default
let count = 0;
countLabel.textContent = count;

decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}