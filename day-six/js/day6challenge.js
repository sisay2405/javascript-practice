function CatFacts() {
      fetch("https://cat-fact.herokuapp.com/facts")
        .then((res) => {
          return res.json();
        })
        .then(function (facts) {
          const factsLength = facts.length;
          const randomNumber = Math.random() * factsLength;
          const flooredNumber = Math.floor(randomNumber);
          alert(facts[flooredNumber].text);
        });
    }
    
    CatFacts();