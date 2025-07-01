// // import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

// const swiper = new Swiper('.swiper', {
//   // Add your Swiper configuration options here
//   loop: true,
//   pagination: {
// 	el: '.swiper-pagination',
//   },
// });
// import { personname, personAge, calculateProfit } from "./modules.js";

// console.log(calculateProfit (100,450));


class Pets{
    constructor(name, breed, age, color, gender){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
        this.gender = gender;
    }

    eats(food){
        console.log(`${this.name} eats ${food}`);
    }

    speech(sound){
        console.log(`${this.name} says ${sound}`);
    }
}

let myPet = new Pets('Mark', "Pitbull", 3, "Brown", 'Male');
myPet.eats("Dog food");
myPet.speech("Woof Woof");

console.log(myPet);

//inheritance

class AquaticPets extends Pets{
    habitat(watertype){
        console.log(`${this.name} lives in the ${watertype}`);
        
    }
};

let dolphin = new AquaticPets('Flipper', "Bottlenose Dolphin", 5, "Gray", 'Female');
dolphin.eats("Fish");
dolphin.speech("Click Click");
dolphin.habitat("Ocean");
