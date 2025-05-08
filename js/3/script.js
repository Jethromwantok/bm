let dtxt = document.getElementById("txt");

let pbut = document.getElementById("bplus");

let mbut = document.getElementById("bmin");

let counter = 0;

let bg = document.getElementById("body");

mbut.setAttribute("disabled", "true");

function plus() {
  mbut.removeAttribute("disabled");
  bg.style.backgroundColor = "white";
  counter++;
  dtxt.innerHTML = counter;
  console.log(counter);

  if (counter > 19) {
    alert(`You've reached the limit`);
    bg.style.backgroundColor = `rgb(144, 255, 190)`;
    pbut.setAttribute("disabled", "true");

    let mcanc = function () {
      pbut.removeAttribute("disabled", "false");
      bg.style.backgroundColor = `rgb(255, 255, 255)`;
    };

    mbut.addEventListener("click", mcanc);
  }
}

function min() {
  counter--;
  dtxt.innerHTML = counter;
  console.log(counter);

  if (counter <= 0) {
    alert(`You've reached the limit`);
    bg.style.backgroundColor = `rgb(255, 144, 144)`;
    mbut.setAttribute("disabled", "true");

    // let pcanc = function(){
    //     mbut.removeAttribute('disabled');
    //     bg.style.backgroundColor = `rgb(255, 255, 255)`;

    // }

    // pbut.addEventListener('click', pcanc);
  }
}

pbut.addEventListener("click", plus);

mbut.addEventListener("click", min);
