// Write your code here!const main = document.querySelector("main")

main.remove()
const newHeader = document.createElement("h1")

newHeader.id = "victory"
newHeader.textContent = "Wayne is the champion"

// Make changes to the DOM elements to pass the tests

// Test 1: Change the color of the heading
const heading = document.querySelector("h1");
heading.style.color = "blue";

// Test 2: Change the font size of the paragraph
const paragraph = document.querySelector("p");
paragraph.style.fontSize = "20px";

// Test 3: Add a background color to the div
const div = document.querySelector("div");
div.style.backgroundColor = "yellow";

// Test 4: Set the text content of the span
const span = document.querySelector("span");
span.textContent = "New Text";

// Test 5: Create a new DOM node and set its text content
const newDiv = document.createElement("div");
newDiv.textContent = "YOUR-NAME is the champion";
