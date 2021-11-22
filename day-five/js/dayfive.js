// Create a new codepen
// Write a function that accepts a number as an argument
// Alert the user whether the given number is even or odd
// Call your function
function number(){
   const a = document.getElementById('input').value;
if (a%2 == 0){
    alert('even')
    console.log("even number");
} else {
    alert('odd')
    console.log("odd number");
}
}
// Write a function that accepts a password (string)
// Validate the password using the following rules:
// Must be 6-20 characters long dfegrt
// Must start with a letter
// Alert the user if their password has been accepted or why their password was rejected
function validate() {
    //let red = /\bJoh?n(athan)?Doe\b/g
    // if (!document.form1.txtInput.value.match(/[a-z](?={6-20})/)) 
    if (!document.form1.txtInput.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))
    {
        alert('please enter vaild value');
    } else {
        alert('success');
    }
}
// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

// /^[a-z](?={6-20})