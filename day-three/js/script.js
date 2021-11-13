// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday

document.getElementById("myButton").onclick= function () {
	var FName = document.getElementById("myTextF").value;
  var LName = document.getElementById("myTextL").value;
  var BName = document.getElementById("myTextB").value;
  alert(LName);
  confirm(BName);
  alert(BName);
	console.log("Hello", FName);
};
// CHALLENGE 1
// Prompt the user for their first name

// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result

