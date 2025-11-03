// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const button2 = document.getElementById("reset-clicks");
const countElement = document.getElementById("click-count");

// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, Browser JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount}`;
}

function resetClicks() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

button.addEventListener("click", updateGreeting);
button2.addEventListener("click", resetClicks);
