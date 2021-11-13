let answer = 0;
// console.log(0+10-4);
console.log(6 * 2);
console.log(6 / 2);
console.log(6 % 2);
console.log(7 % 2);

// answer + 1
// answer = 10 
answer = answer + 1;
answer += 5;

// answer = answer + 1

console.log(answer);

// start to list 
const myinput = document.querySelector("input")
console.log(myinput);
const myButton = document.querySelector("button")
console.log(myButton);
// value
console.log(myinput.value)
// myButton.addEventListener("click", function() {console.log(myinput.value)})
myButton.addEventListener("click", function() {
    const li = document.createElement("li");
    li.innerHTML = myinput.value;
    document.body.append("li");
});
