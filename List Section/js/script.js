/**
 * Treehouse FSJS Techdegree
 * Code Adventure - Weekend Coding Homework
 * End of the Line - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons */
const btn_1 = document.querySelector('#btn_1');
const btn_2 = document.querySelector('#btn_2');
const btn_3 = document.querySelector('#btn_3');


/* Variable to store NodeList of DOM elements */
const list_items = document.querySelectorAll('.items');

// Helpful log statement
console.log(list_items);


/* Variable to store the number of items to show at any given time */
const per_page = 2;


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a variable to store the number of list items that should make up a section - set its value to 2


// 2. Create a function called sectionSelection - Give it two parameters: list, section
// Inside the function body, do the following tasks

  // 2a. Uncomment the following two variables and place them inside the function body.
  // const start_index = (section * per_page) - per_page;
  // const end_index = (section * per_page) - 1;

  // 2c. Loop over the list parameter and set the style.color of each list item to 'whitesmoke'

  // 2d. Loop over the list parameter again
      // Add a conditional inside the loop
      // If the list item index is >= the start_index variable && the list item <= the end_index variable
      // Set the style.color of the the list item to 'green'


// 3. Invoke the sectionSelection function in the event listeners below
   // Be sure to pass in arguments: the `list_items` variable and the targeted section - 1, 2, or 3

/**
 * Event listeners for buttons - Invoke your functions in the body of the callback
 */

/* btn_1 listener */
btn_1.addEventListener('click', () => {

  // Invoke your sectionSelection function here - Arguments: list_items, 1


  // Helpful log statement to test function
  console.log('First button is working!');
});


/* btn_2 listener */
btn_2.addEventListener('click', () => {

  // Invoke your sectionSelection function here - Arguments: list_items, 2


  // Helpful log statement to test function
  console.log('Second button is working!');
});


/* btn_3 listener */
btn_3.addEventListener('click', () => {

  // Invoke your sectionSelection function here - Arguments: list_items, 3


  // Helpful log statement to test function
  console.log('Third button is working!');
});