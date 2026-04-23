/*
-----------------------------------------------------------
Exercise 1: JavaScript Taster
-----------------------------------------------------------
This exercise introduces you to the basics of JavaScript.
We will translate what you know from Python into JS code.

Key Concepts to practise:
- console.log() for output
- Creating variables (let and const)
- Basic maths (+, -, *, /)
- Simple IF/ELSE statements
- Working with string length
-----------------------------------------------------------
HOW TO RUN THIS PROGRAM:
1. Open your terminal in VS Code/GitHub Codespaces.
2. Type: node replace_with_filename.js
3. Press Enter.
===========================================================
*/


// -----------------------------------------------------------
// Task 1: Hello World and Variables
// -------------------------------------------
console.log("-------------------------------------------");
console.log("Task 1: Hello World and Variables");
console.log("-------------------------------------------");

// TODO:
// 1. Print a message saying "Welcome to JavaScript!"
// 2. Create a variable called user_name and set it to your name.
// 3. Print a message that says "Hello" followed by your variable.
//
// EXAMPLE:
// let food = "Pizza";
// console.log("I love " + food);

// Write your code below:

console.log("Welcome to Javascript!");
let food = "Pizza";
console.log("I love " + food);

// -----------------------------------------------------------
// Task 2: Basic Arithmetic (The Calculator)
// -------------------------------------------
console.log("\n-------------------------------------------");
console.log("Task 2: Basic Arithmetic");
console.log("-------------------------------------------");

// TODO:
// 1. Create a variable called num1 and set it to 10.
// 2. Create a variable called num2 and set it to 5.
// 3. Create a variable called total that adds num1 and num2 together.
// 4. Print the result.
//
// EXAMPLE:
// let apples = 2;
// let oranges = 4;
// let fruit_bowl = apples + oranges;

// Write your code below:
let num1 = 10;
let num2 = 5;
let total = num1 + num2;
console.log(total)


// -----------------------------------------------------------
// Task 3: Variables and IF Statements
// -------------------------------------------
console.log("\n-------------------------------------------");
console.log("Task 3: Variables and IF Statements");
console.log("-------------------------------------------");

// TODO:
// 1. Create a variable called password and set it to a value.
// 2. Use an IF statement to check if the password is "JS123".
// 3. If correct, print "Access Granted".
// 4. Otherwise (ELSE), print "Access Denied".
//
// EXAMPLE:
// let colour = "Red";
// if (colour === "Red") {
//     console.log("That is a bold colour!");
// } else {
//     console.log("Cool choice.");
// }

// Write your code below:

let password = "DDH1992";
if (password === "DDH1992") {
     console.log("Access Granted");
} else {
     console.log("Access Denied");
}



// -----------------------------------------------------------
// SAVING YOUR WORK
// -------------------------------------------
// Run your program in the terminal: node replace_with_filename.js
// Does it greet you? Does it do the maths?
// Does the password check work?
//
// SAVE TO GIT:
// 1. Save your file.
// 2. In the terminal, type: git add replace_with_filename.js
// 3. Type: git commit -m "Completed tasks 1 to 3"
// 4. Type: git push origin main
// -------------------------------------------


// -----------------------------------------------------------
// EXTENSION ACTIVITIES
// -------------------------------------------

// Extension 1: Number Squaring
// -------------------------------------------
console.log("\n-------------------------------------------");
console.log("Extension 1: Number Squaring");
console.log("-------------------------------------------");

// TODO: Create a variable called 'myNumber'.
// Print that number multiplied by itself.

// Write your code below:

let myNumber = 12
let myNumberSquared = myNumber * myNumber;
console.log(myNumberSquared)

let myNumber2 = 5
console.log(myNumber2 * myNumber2)

// Extension 2: Score Tracker
// -------------------------------------------
console.log("\n-------------------------------------------");
console.log("Extension 2: Score Tracker");
console.log("-------------------------------------------");

// TODO: Create a variable 'score' set to 0. 
// Create a variable 'userAnswer' for a maths question (e.g. 10). 
// Check IF the userAnswer variable is 10, add 10 to the score variable and print the new total.

// Write your code below:

let score = 0;
let userAnswer = 10;

if (userAnswer === 10) {
     score += 10;
     console.log(score);
}
console.log("Your score is " + score);


// Extension 3: The Length Checker
// -------------------------------------------
console.log("\n-------------------------------------------");
console.log("Extension 3: The Length Checker");
console.log("-------------------------------------------");

// TODO: Create a variable with a word of your choice.
// Use the .length property to count the letters. 
// If the word is longer than 5 letters, print "That's a long word!"

// Write your code below:

let wordChoice = "Supercalifragilisticexpialidocious";
let length = wordChoice.length;

if (wordChoice.length > 5) {
     console.log("Wow, that's a long word!")
}

// -----------------------------------------------------------
// SAVING YOUR WORK
// -------------------------------------------
// Use the terminal to save your progress:
// 1. git add replace_with_filename.js
// 2. git commit -m "Completed extension activities"
// 3. git push origin main
// -------------------------------------------

// -----------------------------------------------------------
// ADVANCED ACTIVITY: The Logic-Bot 2.0
// -------------------------------------------
console.log("\n-------------------------------------------");
console.log("ADVANCED ACTIVITY: The Logic-Bot 2.0");
console.log("-------------------------------------------");

/* TODO:
Create a chatbot logic that uses nested IF statements and a 'status' check.
1. Create a variable 'userMood' and set it to a string (e.g. "happy", "tired", or "hungry").
2. Create a variable 'hoursSleep' and set it to a number.
3. First, check the 'userMood':
   - If "tired":
        - Check 'hoursSleep'. If it is less than 6, print "Go to bed!". 
        - Otherwise, print "Maybe you need more caffeine?"
   - If "happy":
        - Print "Keep that energy up!"
   - If "hungry":
        - Create a variable 'likesPizza' (true or false).
        - If true, print "Order a Margherita!". If false, print "How about a salad?"
   - ELSE (for any other mood):
        - Print "I'm not sure how to help with that mood yet."
*/

// Write your code below:



// -----------------------------------------------------------
// SAVING YOUR WORK
// -------------------------------------------
// Use the terminal to save your final work:
// 1. git add replace_with_filename.js
// 2. git commit -m "Completed advanced activity"
// 3. git push origin main
// -------------------------------------------
