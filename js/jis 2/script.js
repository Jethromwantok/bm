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
let ages = [`Twenty`, `Nineteen`, `Thirty two`];
function quote(item) {
  console.log(`He is ${item} years old`);
}

ages.forEach(quote);

//d. map
let teamWorth = [15000000000, 25000000000, 850000000, 2000000000];
console.log(teamWorth);

function tax(worth) {
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


//Timeouts and Intervals

//Timeout is used to delay the execution of a piece of code
// setTimeout(() => {
//   console.log(`This is my time to shine`);

//   setTimeout(() => {
//     console.log(`Damn! I'm too late`);
    
    
//   }, 3000);
  
  
//}, 3000);

//Interval is used to run a line/block of code repeatedly after a set amount of time
// counter = 0;

// let intreg = setInterval(() => {
//   console.log(counter++);
  
// }, 500);

// setTimeout(()=>{
//   clearInterval(intreg);
  
//   setTimeout(() => {
//     console.log(`Ìnterval terminated`);
    
//   }, 500);
// },20000)

//DOM Document object Model

console.log(document.getElementById('hungre'));//This is to target an HTML element

//innerhtml is used to change things in the html file
// document.getElementById('hungre').innerHTML =  'ÈVEN MORE'

//Learn even more ways to target html elements


//Events
//A. click event

let myH1 = document.getElementById('hungre');
let txtchange = function changeTxt() {
  
  myH1.innerHTML = `Bonjour, Monsieur`;

}
//There are 3 ways

//i. Use the onclick attribute in the HTML file under the particular element and set value as the function name

//ii. 
myH1.onclick = txtchange;

//iii. Adding eventlistener

myH1.addEventListener('click', txtchange)

