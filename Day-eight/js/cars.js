class cars{
	constructor(make, model,year,color) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
    }
    
} 
const myCar1 = new cars("Ford","Mustang" ,2014,"green");
const myCar2 = new cars("Bmw","Sedny" ,2018,"silver");
const myCar3 = new cars("Nissan","Altima" ,2000,"red");
const myCar4 = new cars("Toyota","Camry" ,2020,"white");

const nextButton = document.createElement("div");
nextButton.innerHTML =
    
myCar1.make + "  " + myCar1.model + "  " + myCar1.year + "  " + myCar1.color + ( "<br/>") +
myCar2.make + "  " + myCar2.model + "  " + myCar2.year + "  " + myCar2.color  + ( "<br/>") + myCar3.make + "  " + myCar3.model + "  " + myCar3.year + "  " + myCar3.color + ( "<br/>") +
myCar4.make + "  " + myCar4.model + "  " + myCar4.year + "  " + myCar4.color;

document.body.append(nextButton);

console.log(myCar1);
 console.log(myCar2);
 console.log(myCar3);
 console.log(myCar4);


 async function postData () {
	const food = {
	  name: "Bread",
	  weight: 450,
	  quantity: 3
	}
  
	const response = await fetch("/food", {
	  method: "POST",
	  body: JSON.stringify(food),
	  headers: {
		"Content-Type": "application/json"
	  }
	})
  
	if (!response.ok) {
	  throw new Error(`Request failed with status ${reponse.status}`)
	}
	console.log("Request successful!")
  }