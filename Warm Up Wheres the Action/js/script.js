/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Where's the Action  - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons by id for event listener assignment - You can ignore these */
const btn_1 = document.querySelector('#btn_1');
const btn_2 = document.querySelector('#btn_2');
const btn_3 = document.querySelector('#btn_3');


/* Variable to store NodeList of DOM buttons - You'll use this */
const buttons = document.querySelectorAll('.control_btn');

// Helpful log statement
console.log(buttons);


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a function called setAction and give it the parameter `event`.  Inside the function's code block:
  // 1a. Loop over the buttons variable above
  // 1b. Use `.classList.remove()` to remove the 'active' class name from all buttons
  // 1c. Create a variable and set it equal to `event.target`
  // 1d. Use `.classList.add()` to add the 'active' class name to the event.target variable you just created
  
// 2. Call the setAction function in the ecallbacks of the event listeners below, being sure pass in the event argument



/**
 * Event listeners for buttons - Invoke your functions in the body of the callbacks in the event listneres below
 */

/* btn_1 listener */
btn_1.addEventListener('click', (event) => {

  // Invoke your setAction function here - Arguments: event


  // Helpful log statement to test function
  console.log('First button is functional!');
});


/* btn_2 listener */
btn_2.addEventListener('click', (event) => {

  // Invoke your setAction function here - Arguments: event
  

  // Helpful log statement to test function
  console.log('Second button is functional!');
});


/* btn_3 listener */
btn_3.addEventListener('click', (event) => {

  // Invoke your setAction function here - Arguments: event
  

  // Helpful log statement to test function
  console.log('Third button is functional!');
});