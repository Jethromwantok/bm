let userName = document.getElementById("namespace");
let gender = document.getElementById("gender");
let login = document.getElementById("login");
let namespace = document.getElementById("namespace");
let msg = document.getElementById("welcomeMsg");
let subjects = document.getElementById("subjects");
let loginform = document.getElementById("loginform");
let grade = document.getElementById("grade");
let mathematics = document.getElementById("mathematics");
let english = document.getElementById("english");
let biology = document.getElementById("biology");
let physics = document.getElementById("physics");
let chemistry = document.getElementById("chemistry");
let civic = document.getElementById("civic");
let marketing = document.getElementById("marketing");
let computer = document.getElementById("computer");
let economics = document.getElementById("economics");
let getGrades = document.getElementById("getGrades");
let total = document.getElementById("total");
let gradeletter = document.getElementById("gradeletter");
let remark = document.getElementById("remark");
let warningmsg = document.getElementById('warning');
let scores = document.getElementsByClassName('score');
let average;

login.addEventListener("click", (e) => {
  msg.innerHTML = "";
  e.preventDefault();
  if (userName.value == "") {
    namespace.style.boxShadow = "0 0 3px red";
    alert(`Please input a valid Name`);

    setTimeout(() => {
      namespace.style.boxShadow = "0 0 0px white";
    }, 5000);
  } else {
    alert(`Login Successful!`);
    msg.innerHTML = `Welcome, ${namespace.value}`;
    namespace.style.boxShadow = "0 0 4px rgb(47, 130, 255)";

    setTimeout(() => {
      loginform.style.display = "none";
      subjects.style.display = "block";
      grade.style.display = "block";
      total.setAttribute("disabled", "true");
      remark.setAttribute("disabled", "true");
      gradeletter.setAttribute("disabled", "true");

      getGrades.addEventListener("click", (e) => {
        e.preventDefault();

        if (scores > 100 || scores < 0) {

            warningmsg.innerHTML = `A wrong score was entered`
            
        }

        total.innerHTML= english.value + mathematics.value+physics.value+chemistry.value+biology.value+economics.value+computer.value+civic.value+marketing.value

        average = (total.innerHTML/9);

        if (average >= 70) {
            gradeletter.innerHTML = 'A';
            remark.innerHTML = `Excellent`;
            
        } else if (average < 70 && total.innerHTML >= 60) {
            gradeletter.innerHTML = 'B';
            remark.innerHTML = `Very Good Job`;
            
        } else if (average < 60 && total.innerHTML >= 50) {
            gradeletter.innerHTML = 'C';
            remark.innerHTML = `Good Job`;
            
        } else if (average < 50 && total.innerHTML >= 45) {
            gradeletter.innerHTML = 'D';
            remark.innerHTML = `Fair`;
            
        } else if (average < 45 && total.innerHTML >= 40) {
            gradeletter.innerHTML = 'E';
            remark.innerHTML = `Pass`;
            
        } else if (average < 40 ) {
            gradeletter.innerHTML = 'F';
            remark.innerHTML = `Fail`;
            
        }  


      });
    }, 1000);
  }
});
