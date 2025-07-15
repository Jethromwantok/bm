let driverName = document.getElementById("name");
let driverage = document.getElementById("age");
let prompttxt = document.getElementById("alert");
let submitBtn = document.getElementById("submit");
let form = document.getElementById("form");
let logindiv = document.getElementById("login");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (driverName.value === "" && driverage.value === "") {
    prompttxt.innerHTML = "No text was entered";
    prompttxt.style.color = "red";
    logindiv.style.boxShadow = `0 0 4px rgb(255,0,0)`;

    setTimeout(() => {
      logindiv.style.boxShadow = `0 0 4px rgb(45, 201, 141)`;
    }, 3000);
  } else {
    if (driverName.value !== "" && driverage.value === "") {
      prompttxt.style.color = "red";
      prompttxt.innerHTML = `No Age was entered`;
      driverage.style.border = "1px solid red";
    } else if (driverName.value === "" && driverage.value !== "") {
      driverName.style.border = "1px solid red";
      prompttxt.style.color = "red";
      prompttxt.textContent = `No Name was entered`;
    } else {
      prompttxt.textContent = `Driver ${driverName.value} has been registered`;
      prompttxt.style.color = "black";
    }
  }
});
