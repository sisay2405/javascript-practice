// CHALLENGE 1
// Prompt the user for their first name
// var FName2 = String(prompt("First Name"));
// Store their input to a variable
function returnText(){
    let input = document.getElementById("userInput").value;
    // alert(input)
  console.log(input);
}

// Reverse your user’s name
function reverseName(str){
  var alert1 = str.split(' ').reverse().join(' ');
  console.log(alert1);
  // return alert(alert1); 
}
reverseName("Sanjawo Sewobela");
// alert the reversed string


// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result
 // var FNumber = Number(prompt());
// Prompt for a number value (provide a default of 10)
var Numbervalue1 = Number(prompt("number value first ",10));   
  
if (Numbervalue1 != null) { 
  document.getElementById("demo1").innerHTML =
  Numbervalue1;
}
// Prompt for a second number value (provide a default of 10)
var Numbervalue2 = Number(prompt("number value second",10)); 
if (Numbervalue2 != null) {
  document.getElementById("demo2").innerHTML =
  Numbervalue2;
}
// Convert the prompted values into integers using parseInt()
var integer1 = parseInt(Numbervalue1);
console.log(integer1);
  var integer2 = parseInt(Numbervalue2);
console.log(integer2);
// Add the numbers together and alert the user with the result
var add = Numbervalue1 +  Numbervalue2;
alert(add);