/**
 * Treehouse FSJS Techdegree - Project Warm-up
 * What's the Deal with Functions - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to store buttons */
const btn_1 = document.querySelector('#btn_1');
const btn_2 = document.querySelector('#btn_2');
const btn_3 = document.querySelector('#btn_3');
const btn_4 = document.querySelector('#btn_4');


/* Variable to store DOM elements 
   You'll use these variables in your code below */
const element_1 = document.querySelectorAll('.items')[0];
const element_2 = document.querySelectorAll('.items')[1];
const element_3 = document.querySelectorAll('.items')[2];
const element_4 = document.querySelectorAll('.items')[3];


// Helpful log statements
console.log(element_1);
console.log(element_2);
console.log(element_3);
console.log(element_4);


/* Variables to use as arguments when invoking our functions
   You'll use these variables for the arguments that you pass into your functions when you call them in the event listeners below */
const value_1 = 42;
const value_2 = 'Treehouse Rocks!';
const value_3 = btn_3.tagName;
const value_4 = [value_1, value_2, value_3]


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a function to set the content of the first element and pass in a single parameter called `number`
  // 1a. Set the element_1 variable's style.color property equal to green, or your favorite color
  // 1b. Set the `innerHTML` of element_1 variable equal to the `number` parameter


// 2. Create a function to set the content of the second element and pass in a single parameter called `string`
  // 2a. Set the element_2 variable's style.color property equal to green, or your favorite color
  // 2b. Set the `innerHTML` of element_2 variable equal to the `string` parameter


// 3. Create a function to set the content of the third element and pass in a single parameter called `element`
  // 3a. Set the element_3 variable's style.color property equal to green, or your favorite color
  // 3b. Set the `innerHTML` of element_3 variable equal to the `element` parameter


// 4. Create a function to set the content of the fourth element and pass in a single parameter called `array`
  // 4a. Set the element_4 variable's style.color property equal to green, or your favorite color
  // 4b. Create a variable to store what will be printed and set it equal to an empty string, `''`
  // 4c. Loop over the array parameter
    // 4cc. Concatenate the `array[i]` to the print variable created above for each iteration 
  // 4d. Set the `innerHTML` of element_4 variable equal to the printed variable created above


// 5. Call each function you've created in the associated event listeners below, using the `value_` variables above as the argumets that you pass in.

// 6. Try playing around with the argumnets that you pass into the function that you call in the event listneer callbalcks below.  Expereiemnt to get a better idea of how function parameter/arguments work. 


/**
 * Event listeners for buttons - Invoke your functions in the body of the callback
 */

/* btn_1 listener */
btn_1.addEventListener('click', () => {

  // Invoke 
  setElementOne(value_1);

  // Helpful log statement to test function
  console.log('First button is working!');
});


/* btn_2 listener */
btn_2.addEventListener('click', () => {

  // Invoke 
  setElementTwo(value_2);

  // Helpful log statement to test function
  console.log('Second button is working!');
});


/* btn_3 listener */
btn_3.addEventListener('click', () => {

  // Invoke 
  setElementThree(value_3);

  // Helpful log statement to test function
  console.log('Third button is working!');
});


/* btn_4 listener */
btn_4.addEventListener('click', () => {

  // Invoke  
  setElementFour(value_4);

  // Helpful log statement to test function
  console.log('Fourth button is working!');
});