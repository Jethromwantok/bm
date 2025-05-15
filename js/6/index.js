let stops = document.getElementById("stop");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let secondcounter = 0;
let minutecounter = 0;
let hourcounter = 0;

start.onclick = function startTime() {

    // if (start.innerHTML = `Resume`) {
    //     start.innerHTML = `Start`;
        
    // }
    start.setAttribute('disabled', 'true')
  let myInterval = setInterval(() => {
    secondcounter++;
    seconds.innerHTML = secondcounter;

    if (secondcounter >= 10) {
      secondcounter = 0;
      minutecounter++;
      minutes = minutecounter;
    }

    if (minutecounter >= 59) {
      minutecounter = 0;
      hourcounter++;
      hours = hourcounter;
    }
  }, 1000);

  reset.onclick = function resetTime() {
    secondcounter = 0;
    minutecounter = 0;
    hourcounter = 0;

    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
    start.removeAttribute('disabled',);
    start.innerHTML=`Start`;

    clearInterval(myInterval);
  };
  
  stops.onclick = function stopTime() {
    clearInterval(myInterval);
    start.innerHTML = `Resume`;
    start.removeAttribute('disabled');

  }
};
