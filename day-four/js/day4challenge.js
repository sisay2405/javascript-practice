// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

// Prompt the user for two different numbers
// var numberone = Number(prompt("First Number"));
// var numbertwo = Number(prompt("Second Number"));
var integer1 = parseInt(numberone);
var integer2 = parseInt(numbertwo);
var sum1 = integer1 * integer2
consolo.log(sum1);

function compare(integer1, integer2) {
   if (integer1 > integer2) {
       return alert(integer1);
   } else {
       return alert(integer2);
   }
}

// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number