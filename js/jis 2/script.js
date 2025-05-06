//Loops

//a.for
for (let a = 0; a <= 10; a++) {
  if (a <= 1) {
    console.log(`The baby is ${a} year old`);
  } else {
    console.log(`The baby is ${a} years old`);
  }
}

//b.while

let b = 0;

while (b <= 10) {
  console.log(b);
  b++;
}

//c. do while

b = 0;
do {
  console.log(b);
} while (b == 10000);

//d. for each
let ages = [`Twenty`, `Nineteen`,`Thirty two`];
function quote(item) {
    console.log(`He is ${item} years old`);
    
}

ages.forEach(quote);


//d. map
let teamWorth = [15000000000, 25000000000, 850000000, 2000000000];
console.log(teamWorth);


function tax(worth){
    taxAmount = worth * 0.02;
    return taxAmount;
}

let taxes = teamWorth.map(tax);
console.log(taxes);

//e. Filter
teamWorth = [15000000000, 25000000000, 850000000, 2000000000];
console.log(teamWorth);


function canPurchase(worth) {
    return worth <= 2000000000;
    
}

let affordable = teamWorth.filter(canPurchase);
console.log(affordable);
