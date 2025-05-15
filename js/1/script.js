//Variables are declared using (Let) and (Const) keywords


//variables with let can be updated, const cannot


let name = "John Doe"; // String
console.log(name); // Output: John Doe
console.log(document.location);

const Brand= 'Harold & Montana'
console.log(Brand);



let team = 'PSG'
//

let stmt= team + " is my worst team"//concatenation using double quotes

let smth = `Every other team will beat ${team} right now`

console.log(stmt);
console.log(smth);

//(.) after a variable is for interaction
//A variable cannot be declared twice, it can only be updated
//DATA TYPES: String, number, array, boolean, object, null, undefined

//To get data type

let item = 'Fish Gills';
let qty = 6;

console.log(typeof item);
console.log(typeof qty);

//Array

let clothingbrand = [`Versace`,`New Balance`,`Nike`,`Under Armor`,`Levi's`]
console.log(typeof clothingbrand);
console.log(clothingbrand);

console.log(clothingbrand.length);//To check the length of the array

console.log(clothingbrand.includes("Jordan"));//To check if an item is included in an array
console.log(clothingbrand[3]);//To pick array item by index number

clothingbrand[0]= 'Puma'; //Updating array, changing value of a particular index
clothingbrand.unshift(`Curry`, "Anta")
console.log(clothingbrand);//Adding a value to the beginning of an array

clothingbrand.shift();//Removing item from the start
console.log(clothingbrand);

clothingbrand.pop()//Removing item from end of array
console.log(clothingbrand);

clothingbrand.push("Lacoste", 'Chanel');//adding an item to the end of an array
console.log(clothingbrand);

//Adding items in front and behind can be more than one

//Concat: Adding two arrays

let resturant=[`KFC`, `SFC`, `Mr Biggs`, `Dominoes`, `Inside Out`]

let drain = clothingbrand.concat(resturant);

//OR

let otilo = [...clothingbrand, ...resturant]//For adding more than two Arrays

console.log(drain);
console.log(otilo);

//Javascript Objects







let myFriend={
    name:'Abraham',
    age:20,
    complexion:`brown`,
    favfood: `Rice and Beans`,
    hobbies:['Driving', 'Gaming', `Playing Basketball`, `Listening to music`]
}
//Calling Javascript Objects
console.log(myFriend);

//calling specific keys in objects
console.log(myFriend.favfood);

//Updating Object
myFriend.favfood='Shawarma';
console.log(myFriend);

//adding a new key
myFriend['height']= `5'10`;
console.log(myFriend);
console.log(myFriend.height);

//Deleting key
delete myFriend.height;
console.log(myFriend);

console.log(myFriend.hobbies[3]);


let num1 = 5;
//Operators: Arithmetic, 

//comarison operators: <,>,==,===,!=

//if operator: if, else if, else
console.log(num1);



let name1 = `Juanita`;
let weigthInPounds = 250;
if(weigthInPounds <= 100){
    console.log(`${name1} go and eat`);
}else if(weigthInPounds > 100 && weigthInPounds <= 200){
    console.log(`${name1} You seem quite normal`);
}else if(weigthInPounds > 200 && weigthInPounds <= 250){
    console.log(`${name1} You're heavy, I just hope it's muscle and not fat`);
}else if(weigthInPounds > 250 && weight in pounds <= 300){
    console.log(`${name1}You need to start working out`);
}else{
    console.log(`wow :)`);
}

//FUNCTIONS
function wedding(){
    console.log(`Happy Maried Life`);
    
}

wedding();


function calcScore(name1,ca1, ca2, ca3, exam) {

    totalScore = ca1 + ca3 + ca2 + exam ;

    if(totalScore < 50){

        console.log(`The total score out of 100 is ${totalScore}, ${name1} You have failed this course`);
    }else if(totalScore >=50 && totalScore < 95){
        
        console.log(`The total score out of 100 is ${totalScore}, Good Job ${name1}`);
    }else{
        console.log(`The total score out of 100 is ${totalScore}, Excellent job ${name1}`);
        
    }   
}

calcScore(`Augustine`,15,16, 8, 45);


//Another way of declaring functions

let vision = (divine)=>{
    console.log(`My vision is ${divine}`);
}

console.log(vision(`Great`));

//Call Back Functions

// function arith(value, value2, operator){
//     console.log(`You want to do ${operator} using ${value} and ${value2}` );
    
// }

// function comment(callback){
//     const user = `jamike`;
//     const him = `gij`
//     const her = `hart`
//     callback(user, her, him);
// }

// comment(arith);

function state(lgInCommon) {
    console.log(`The states in common are ${lgInCommon}`);
}

function country(stateInCommon) {
    let give = `Lagos`;
    stateInCommon(give);
}

country(state);



function gradient(x,y,c) {
    let m = (y-c)/x ;
    return m;

}

function rateOfChange(old, now, nowMinold){
    let difference = now - old;

    return nowMinold(5,6,difference)
}

console.log(rateOfChange(5,7, gradient));
 