
// const dog = {
//     name: "Blue",
//     legs:4,
//     color: "brown",
//     speak: function () {
//         alert("woof!");
//     },
//     High5: function(){
//       console.log("good boy");
//     //   const par = document.createElement("div");
//     //   par.textContent = Object.values(this.High5)
//     // document.body.prepend(par);

//     }

// };
// const par = document.createElement("div");
// par.innerHTML = Object.values(dog)
// document.body.prepend(par);
// dog.speak()
// dog.High5()
//  console.log(dog.High5(function ()));

//  console.log(dog["name"]);

//  dog.meat = "unkown meat";
// console.log(dog);
//  dog.name = "wisky dog";
//  console.log(dog);

//  async function postData () {
//     const food = {
//       name: "Bread",
//       weight: 450,
//       quantity: 3
//     }
  
//     const response = await fetch("/food", {
//       method: "POST",
//       body: JSON.stringify(food),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
  
//     if (!response.ok) {
//       throw new Error(`Request failed with status ${reponse.status}`)
//     }
//     console.log("Request successful!")
//   }
// 
var dog = {

  name: 'Benji',
  
  talk: function () {
  
  alert('Woof, woof!');
  
  }
  
  };

// var a = [];

//  a[0] = function (what) { alert(what); };

// a[0]('Boo!');
var hero = {

  breed: 'Turtle',
  
  occupation: 'Ninja',
  
  say: function () {
  
  return 'I am ' + hero.occupation;
  
  }
  
  };
  
  console.log(hero.say());
  var hero = {

    name: 'Rafaelo',
    
    sayName: function () {
    
    return this.name;
    
    }
    
    };
    
   hero.sayName();
   console.log(hero.sayName());
   function Hero() {

    this.occupation = 'Ninja';
    
    }
    var hero = new Hero();

hero.occupation;
console.log(hero.occupation);
function Dog(name) {
  this.name = name;
  this.speak = function() {
    return 'woof';
  };
}

const og = new Dog('Pogo');

Dog.prototype.speak = function() {
  return 'arf';
};

console.log(og.speak());