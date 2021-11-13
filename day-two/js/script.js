// // console.log("Sisay")
// // const buttom = document.quary

// // day02 class
// // Boolean
// // var const or let are for decoration 
// // const and var you cant change it 
// // let we can change mind and  we can not declare two times 
// // const you can use so many times
// var yes = true;
// no = false;
// // number
// Numbers = 0;
// Number = 1.5;
// // string 
// String = "my name"
// numberOrString="1";
// console.log(typeof numberOrString);


// // something no answer 
// // Bigint --- created by adding "n" to the end of integer 
// // symbole creates anonymous and unique value 
// noAnswer = undefined
// // edge case
// // bigint 

// myBigInt = 19n;
// // Symbol
// mySymbol = Symbol("my symbol");
// // compound /complex data types 
// // array have []/
// // /same type; 
// const myarray=[1,2,3,4,5] 
// // mixed type 
// const myarray2 =[1,2,3,4,5, "a","b","c", true,false ]
// const myObject = {
//     name: "hohn",
//     age : 30,
// }

// console.log(myarray[4])
// console.log(myObject[0])
// // braket notation 
// console.log(myObject["name"])
// // dot notation 
// console.log(myObject.name);
// // arrays can not be accessed with dot notation (myarrray.0)
// console.log(myarray[0])
// //data types continued 
// const myElement = document.getElementById("myElement");


// Assign STRING VALUES ONLY to all of the following variables.
// Assign an adjective
let adj1 = "fancy"
// Assign an adjective
let adj2= "intellectual";
// Assign an adjective
let adj3= "strong";
// Assign an adjective
let adj4= "tall";
// Assign an adjective
let adj5= "big";
// Assign an adjective
let adj6= "attractive";
// Assign an adverb
let adverb= "active";
// Assign a color
let color= "green";
// Assign a noun
let noun1= "unberella";
// Assign a noun
let noun2= "pizza";
// Assign a noun
let noun3 = "john";
// Assign a noun
let noun4 = "stone";
// Assign a noun
let noun5 = "ball";
// Assign a noun
let noun6 = "flower";
// Assign a number
let num = "5";
// Assign a plural noun
let pnoun1 = "houses";

// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE

//Using template literals to plug in the values
let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//Console log the completed story
console.log(story);
document.body.innerHTML = `<h1>${story}</h1>`
