/*
The opposite of functional programming is imperative programming. 
Imperative programming focuses on the how by describing how you should do it.

Here’s a breakdown of what imperative programming involves:

State and Mutability:
In imperative programming, you frequently change the state of the program using variables. This means you modify data in place.
For example, you might change the value of a variable or update an item in a list.

Step-by-Step Instructions:
You write explicit instructions on how to achieve a task. This often involves loops and conditional statements.
The focus is on describing how to perform tasks through a sequence of commands.

Side Effects:
Functions or procedures in imperative programming often have side effects, meaning they change the state of the program or interact with the outside world (e.g., updating a global variable or writing to a file).
Procedures and Functions:

Functions (or procedures) in imperative programming can change the state of the program, and their output can depend on that state.

*/

// Imperative code to sum an array
let numbers = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
// Imperative code with state changes
let counter = 0;

function increment() {
    counter++;
}
increment();


// Where as in functional programming its about creating new data with the changes. We avoid changing the state directly. Like this:

// Functional code to sum an array
let numbers2 = [1, 2, 3, 4];
let sum2 = numbers.reduce((acc, num) => acc + num, 0);



