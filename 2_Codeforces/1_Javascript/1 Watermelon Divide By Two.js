/*

    One hot summer day Pete and his friend Billy decided to buy a watermelon. They chose the biggest and the ripest one, in their opinion. After that the watermelon was weighed, and the scales showed w kilos.
    They rushed home, dying of thirst, and decided to divide the berry, however they faced a hard problem.

    Pete and Billy are great fans of even numbers, that's why they want to divide the watermelon in such a way that each of the two parts weighs even number of kilos, at the same time it is not obligatory that the parts are equal.
    The boys are extremely tired and want to start their meal as soon as possible, that's why you should help them and find out, if they can divide the watermelon in the way they want. For sure, each of them should get a part of positive weight.

    Input
    The first (and the only) input line contains integer number w (1 ≤ w ≤ 100) — the weight of the watermelon bought by the boys.

    Output
    Print YES, if the boys can divide the watermelon into two parts, each of them weighing even number of kilos; and NO in the opposite case.


    Example:
    Input = 8
    Output = YES

    Input = 5
    Output = NO

*/

// // Function takes in Watermelon size in KG
// let canDivideWatermelon = function (melonWeight) {
//     // Check if melonWeight is even and greater than 2
//     // === Compares both values and types                               // "5" === 5 → false
//     // == Only compares values (performs type conversion if needed)     // "5" == 5 → true
//     if (melonWeight > 2 && melonWeight % 2 === 0) {
//         console.log("YES");
//     } else {
//         console.log("NO");
//     }
// }

// // Test case from example
// canDivideWatermelon(8);
// canDivideWatermelon(5);


// Below code didn't run because we didn't ask for user input
// function isWatermelonDivisible(w) {
//   // Check if w is greater than 2 and divisible by 2 (even)
//   if (w > 2 && w % 2 === 0) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }
// isWatermelonDivisible(20);


// Example way to take user input in Node.js v22.14.0
// Import the built-in 'readline' module from Node.js using the node: prefix
// const readline = require('node:readline');

// // Create an interface to read from standard input (keyboard) and write to standard output (terminal)
// const rl = readline.createInterface({
//   input: process.stdin,   // input stream (keyboard input)
//   output: process.stdout  // output stream (console/terminal output)
// });

// // Ask the user a question — this prints the question and waits for input
// rl.question('What is your name? ', (name) => {
//   // When the user types their name and presses Enter, this callback runs
//   // 'name' contains whatever the user typed
//   console.log(`Hello, ${name}!`);  // Print a greeting message with the user's name

//   rl.close();  // Close the readline interface (important to end the input stream cleanly). Like scanner.close() in java
// });



// // Best solution format for Node.js with above example
// function isWatermelonDivisible(w) {
//   // Check if w is greater than 2 and divisible by 2 (even)
//   if (w > 2 && w % 2 === 0) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// const readlineMucha = require('node:readline');
// const myScanner = readlineMucha.createInterface({
//   input: process.stdin,   // input stream (keyboard input)
//   output: process.stdout  // output stream (console/terminal output)
// });

// // Ask the user a question — this prints the question and waits for input
// myScanner.question('Weight of Watermelon? ', (watermelonEntered) => {
//   const weight = Number(watermelonEntered.trim());  // Convert input string to number safely
//   if (isNaN(weight)) {
//     console.log("Please enter a valid number!");
//   } else {
//     isWatermelonDivisible(weight);  // Pass a number to the function
//   }
//   myScanner.close();
// });




// Chain the two questions together to avoid them running concurrently
// const readline = require('node:readline');

// // Create a single interface for reading input and writing output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Function to check if watermelon weight is divisible
// function isWatermelonDivisible(w) {
//   if (w > 2 && w % 2 === 0) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }

// // First ask for name
// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);

//   // Then ask for watermelon weight
//   rl.question('Weight of Watermelon? ', (watermelonEntered) => {
//     const weight = Number(watermelonEntered.trim());
//     if (isNaN(weight)) {
//       console.log("Please enter a valid number!");
//     } else {
//       isWatermelonDivisible(weight);
//     }

//     rl.close(); // Close after both questions are done
//   });
// });



// Code below worked in codeforces
process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputData = '';

process.stdin.on('data', function (chunk) {
    inputData += chunk;
});

process.stdin.on('end', function () {
    const w = parseInt(inputData.trim());
    if (w > 2 && w % 2 === 0) {
        console.log("YES");
    } else {
        console.log("NO");
    }
});




// Accepted solution in Codeforces submission
// Below code will generate an error because it's Javascript v8 4.8.0 and the compiler is running Node.js v22.14.0
// var w = parseInt(readline());

// if (w > 2 && w % 2 === 0) {
//     print("YES");
// } else {
//     print("NO");
// }