let branch = document.getElementById("branch");
let staffName = document.getElementById("name");
let gender = document.getElementById("gender");
let position = document.getElementById("position");
let email = document.getElementById("email");
let age = document.getElementById("age");
let contract = document.getElementById("contract");
let salary = document.getElementById("salary");
let mstatus = document.getElementById("status");
let photo = document.getElementById("image");

let show = document.getElementById("show");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let counter = 0;
let first = true;

//AJAX (Asynchronous JavaScript and XML) request to fetch staff details , but using JSON

let xhr = new XMLHttpRequest();
xhr.open("GET", "./staff.json");

xhr.onload = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    let staffdetails = xhr.responseText;
    staffdetails = JSON.parse(staffdetails);
    console.log(staffdetails);

    // Display the first staff details
    // branch.innerHTML = staffdetails[counter]['Branch'];
    // staffName.innerHTML = staffdetails[counter]['Name'];
    show.addEventListener("click", () => {
      show.style.display = "none";
      prev.style.display = "block";
      next.style.display = "block";
      branch.innerHTML = staffdetails[counter]["Branch"];
      staffName.innerHTML = staffdetails[counter]["Name"];
      gender.innerHTML = staffdetails[counter]["Gender"];
      position.innerHTML = staffdetails[counter]["Position"];
      email.innerHTML = staffdetails[counter]["Email"];
      age.innerHTML = staffdetails[counter]["Age"];
      contract.innerHTML = staffdetails[counter]["Contract"];
      salary.innerHTML = staffdetails[counter]["Salary"];
      mstatus.innerHTML = staffdetails[counter]["Marital_Status"];
      photo.src = staffdetails[counter]["Photo"];
    });

    next.addEventListener("click", () => {
      counter++;
      if (counter > staffdetails.length - 1) {
        counter = 0;
      }

      branch.innerHTML = staffdetails[counter]["Branch"];
      staffName.innerHTML = staffdetails[counter]["Name"];
      gender.innerHTML = staffdetails[counter]["Gender"];
      position.innerHTML = staffdetails[counter]["Position"];
      email.innerHTML = staffdetails[counter]["Email"];
      age.innerHTML = staffdetails[counter]["Age"];
      contract.innerHTML = staffdetails[counter]["Contract"];
      salary.innerHTML = staffdetails[counter]["Salary"];
      mstatus.innerHTML = staffdetails[counter]["Marital_Status"];
      photo.src = staffdetails[counter]["Photo"];
      console.log(counter);
    });

    prev.addEventListener("click", () => {
      counter--;
      if (counter < 0) {
        counter = staffdetails.length - 1;
      }

      console.log(counter);

      branch.innerHTML = staffdetails[counter]["Branch"];
      staffName.innerHTML = staffdetails[counter]["Name"];
      gender.innerHTML = staffdetails[counter]["Gender"];
      position.innerHTML = staffdetails[counter]["Position"];
      email.innerHTML = staffdetails[counter]["Email"];
      age.innerHTML = staffdetails[counter]["Age"];
      contract.innerHTML = staffdetails[counter]["Contract"];
      salary.innerHTML = staffdetails[counter]["Salary"];
      mstatus.innerHTML = staffdetails[counter]["Marital_Status"];
      photo.src = staffdetails[counter]["Photo"];
    });
  }
};

xhr.send();
