// Variables - same as console JavaScript
let clickCount = 0;
let clickCount2 = 0;
// Get references to HTML elements
const greetingElement = document.getElementById("greeting");
const button = document.getElementById("change-greeting");
const button2 = document.getElementById("reset-clicks");
const button3 = document.getElementById("increment-clicks");
const button4 = document.getElementById("reset-clicks2");
const button5 = document.getElementById("decrement-clicks");
const countElement = document.getElementById("click-count");
const countElement2 = document.getElementById("click-count2");
const backgroundElement = document.body;
// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, Browser JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount}`;
  if (clickCount >= 5) {
    greetingElement.style.color = "blue";
  }
}

function incrementClicks() {
  clickCount2++;
  countElement2.textContent = `Button clicks: ${clickCount2}`;
  if (clickCount2 >= 10) {
    backgroundElement.style.backgroundColor = "yellow";
  }
}

function decrementClicks() {
  clickCount2--;
  countElement2.textContent = `Button clicks: ${clickCount2}`;
  if (clickCount2 < 10) {
    backgroundElement.style.backgroundColor = "red";
  }
}

function resetClicks() {
  clickCount = 0;
  countElement.textContent = `Button clicks: ${clickCount}`;
}

function resetClicks2() {
  clickCount2 = 0;
  countElement2.textContent = `Button clicks: ${clickCount2}`;
  backgroundElement.style.backgroundColor = "white";
}

button.addEventListener("click", updateGreeting);
button2.addEventListener("click", resetClicks);
button3.addEventListener("click", incrementClicks);
button4.addEventListener("click", resetClicks2);
button5.addEventListener("click", decrementClicks);
const customGreetingInput = document.getElementById("custom-greeting");
const setGreetingButton = document.getElementById("set-greeting");

setGreetingButton.addEventListener("click", () => {
  greetingElement.textContent = customGreetingInput.value;
});
