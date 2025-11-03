// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const countElement = document.getElementById("click-count");

// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, Browser JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount}`;
}

button.addEventListener("click", updateGreeting);
