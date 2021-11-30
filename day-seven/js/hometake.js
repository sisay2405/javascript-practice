// 1st method
// function fetchFacts() {
// 	fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`)
// 		.then((response) => response.text())
// 		.then((data) => {
// 			let fact = JSON.parse(data).text;
// 			console.log(fact);
// 			document.getElementById("demo").innerHTML = fact; 
// 		});
// }

// const nextButton = document.createElement("button");
// document.body.prepend(nextButton);
// nextButton.innerHTML = "Next";
// nextButton.addEventListener("click", function () {
//     fetchFacts();
// });
// 2nd method
function fetchFacts() {
	fetch(`https://cat-fact.herokuapp.com/facts`)
    .then((res) => {
        return res.json();
      })
      .then(function (facts) {
        const factsLength = facts.length;
        const randomNumber = Math.random() * factsLength;
        const flooredNumber = Math.floor(randomNumber);
        document.getElementById("demo").innerHTML = facts[flooredNumber].text;
      });
}
// fetchFacts()
const nextButton = document.createElement("button");
document.body.prepend(nextButton);
nextButton.innerHTML = "Next";
nextButton.addEventListener("click", function () {
    fetchFacts();
});
