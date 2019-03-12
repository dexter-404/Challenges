*Weekend Coding Homework.*  
From: Team of Treehousers! 
___________________________________________________________________________________

*Excellent practice for new coders*

*Create a pure, stateless helper function that will create an element, append it to the DOM, and add as many attributes as you need* 
In the first half of this Techdegree, you'll be doing a lot of DOM manipulation, creating, appending and adding attributes to elements.  
So let's create a handy helper function that can do this for you, in any project, and in one fell swoop.

Write a function that takes in three parameters, a string representing the element that is to be created, a string representing the parent element that you'll append to, and an object, `{}` that will hold attribute and attribute value pairs.  
Inside the function body, create the element and store it in a variable.  
Append the variable to the parent element.  
And then here's the tricky part, use a for in loop to iterate over the attribute object parameter, and add each one to the element you've created. 
Lastly, return the element.