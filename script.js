// ====================
// Part 1: Variables & Conditionals
// ====================
const output1 = document.getElementById('part1-output');

let userName = 'Alice';
let userAge = 20;

if (userAge >= 18) {
  output1.textContent = `${userName} is an adult.`;
} else {
  output1.textContent = `${userName} is a minor.`;
}

// ====================
// Part 2: Functions
// ====================

// Function 1: Calculate sum of two numbers
function sum(a, b) {
  return a + b;
}

// Function 2: Format a greeting message
function greet(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

const output2 = document.getElementById('part2-output');
output2.textContent = `${greet(userName)} The sum of 5 and 3 is ${sum(5,3)}.`;

// ====================
// Part 3: Loops
// ====================

const output3List = document.getElementById('part3-list');

const fruits = ['Apple', 'Banana', 'Cherry'];

// Loop 1: Using for loop
for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement('li');
  li.textContent = `Fruit (for loop): ${fruits[i]}`;
  output3List.appendChild(li);
}

// Loop 2: Using forEach loop
fruits.forEach(fruit => {
  const li = document.createElement('li');
  li.textContent = `Fruit (forEach): ${fruit}`;
  output3List.appendChild(li);
});

// ====================
// Part 4: DOM Manipulation
// ====================

const toggleBtn = document.getElementById('toggle-btn');
const domBox = document.getElementById('dom-box');
const addItemBtn = document.getElementById('add-item-btn');
const dynamicList = document.getElementById('dynamic-list');

toggleBtn.addEventListener('click', () => {
  // Toggle a class to change box color
  domBox.classList.toggle('red');
});

let itemCount = 0;

addItemBtn.addEventListener('click', () => {
  // Create a new list item dynamically
  itemCount++;
  const li = document.createElement('li');
  li.textContent = `New item ${itemCount}`;
  dynamicList.appendChild(li);
});
