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
let averageprint = document.getElementById("average");
let gradeletter = document.getElementById("gradeletter");
let remark = document.getElementById("remark");
let warningmsg = document.getElementById('warning');
// let scores = document.getElementsByClassName('score');
let totalScore;
let average;
let scoreError = document.getElementById("scoreError")

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
      // total.setAttribute("disabled", "true");
      // averageprint.setAttribute("disabled", "true");
      // remark.setAttribute("disabled", "true");
      // gradeletter.setAttribute("disabled", "true");

      getGrades.addEventListener("click", (e) => {
        e.preventDefault();

        
          if (english.value == '' || english.value > 100) {
            english.style.border = 'solid 1px red';
          }else{
            english.style.border = 'solid 1px green';
          }

          if (mathematics.value == '' || mathematics.value > 100 ||) {
            mathematics.style.border = 'solid 1px red';
          }else{
            mathematics.style.border = 'solid 1px green';
          }
          if (marketing.value == '' || marketing.value > 100) {
            marketing.style.border = 'solid 1px red';
          }else{
            marketing.style.border = 'solid 1px green';
          }
          if (biology.value == '' || biology.value > 100) {
            biology.style.border = 'solid 1px red';
          }else{
            biology.style.border = 'solid 1px green';
          }
          if (economics.value == '' || economics.value > 100) {
            economics.style.border = 'solid 1px red';
          }else{
            economics.style.border = 'solid 1px green';
          }
          if (chemistry.value == '' || chemistry.value > 100) {
            chemistry.style.border = 'solid 1px red';
          }else{
            chemistry.style.border = 'solid 1px green';
          }
          if (civic.value == '' || civic.value > 100) {
            civic.style.border = 'solid 1px red';
          }else{
            civic.style.border = 'solid 1px green';
          }
          if (computer.value == '' || computer.value > 100) {
            computer.style.border = 'solid 1px red';
          }else{
            computer.style.border = 'solid 1px green';
          }
          if (physics.value == '' || physics.value > 100) {
            physics.style.border = 'solid 1px red';
          }else{
            physics.style.border = 'solid 1px green';
          }

           scoreError.innerHTML = `One or more of the score fields have been left blank`;
          total.value = '';
          averageprint.value = '';
          remark.value = '';
          gradeletter.value = '';
        


        if (english.value == '' || mathematics.value =='' ||  physics.value == '' || chemistry.value == '' || civic.value == '' || marketing.value == '' || economics.value == '' || computer.value == '' || biology.value == '') {

          scoreError.innerHTML = `One or more of the score fields have been left blank`;
          total.value = '';
          averageprint.value = '';
          remark.value = '';
          gradeletter.value = '';


        }else{totalScore = Number(english.value) + Number(mathematics.value)+ Number(physics.value)+ Number(chemistry.value)+Number(biology.value)+Number(economics.value)+Number(computer.value)+Number(civic.value)+Number(marketing.value);

        console.log(totalScore);
        total.value = `Total :${totalScore}`
        

        average = (totalScore/9);
        console.log(average);
        averageprint.value = `Average :${average}` ;
        

        if (average >= 70) {
            gradeletter.value = `Grade : A`;
            remark.value = `Excellent`;
            
        } else if (average < 70 && average >= 60) {
            gradeletter.value = 'Grade : B';
            remark.value = `Very Good Job`;
            
        } else if (average < 60 && average >= 50) {
            gradeletter.value = 'Grade : C';
            remark.value = `Good Job`;
            
        } else if (average < 50 && average >= 45) {
            gradeletter.value = 'Grade : D';
            remark.value = `Fair`;
            
        } else if (average < 45 && average >= 40) {
            gradeletter.value = 'Grade : E';
            remark.value = `Pass`;
            
        } else if (average < 40 ) {
            gradeletter.value = 'Grade : F';
            remark.value = `Fail`;
            
        }  
      }
      });
    }, 1000);
  }
});
