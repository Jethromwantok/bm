let startbtn = document.getElementById('startQuizBtn');
let q1 = document.getElementById('Question1');
let q2 = document.getElementById('Question2');
let q3 = document.getElementById('Question3');
let q4 = document.getElementById('Question4');
let q5 = document.getElementById('Question5');
let q6 = document.getElementById('Question6');
let q7 = document.getElementById('Question7');
let q8 = document.getElementById('Question8');
let q9 = document.getElementById('Question9');
let q10 = document.getElementById('Question10');
let loginForm = document.getElementById('loginForm');
let userName = document.getElementById('name');
let questionCount = 0;
let nextbtn = document.getElementById('nextQuestionBtn');
let prevbtn = document.getElementById('previousQuestionBtn');
let submitbtn = document.getElementById('submitBtn');
let resultpage = document.getElementById('result')

let q1ans = document.getElementById('q1ans');
let q2ans = document.getElementById('q2ans');
let q3ans = document.getElementById('q3ans');
let q4ans = document.getElementById('q4ans');
let q5ans = document.getElementById('q5ans');
let q6ans = document.getElementById('q6ans');
let q7ans = document.getElementById('q7ans');
let q8ans = document.getElementById('q8ans');
let q9ans = document.getElementById('q9ans');
let q10ans = document.getElementById('q10ans');
let restart = document.getElementById('restart')

function q1a(){
    document.getElementById('q1ans').value = 'Caught';
} 
function q1b (){
    document.getElementById('q1ans').value = 'Cut';
    
 }
 function q1c() {
     document.getElementById('q1ans').value = 'Cutted';
    }
function q2a(){
    document.getElementById('q2ans').value = 'Mitochondria';
}

function q2b (){
    document.getElementById('q2ans').value = 'Nucleus';
}

function q2c (){
    document.getElementById('q2ans').value = 'Golgi apparatus';
}

function q3a (){
    document.getElementById('q3ans').value = 'Humerus';
}

function q3b (){
    document.getElementById('q3ans').value = 'Vertebra';
}

function q3c (){
    document.getElementById('q3ans').value = 'Femur';
}

function q4a (){
    document.getElementById('q4ans').value = 'Aluminium';
}

function q4b (){
    document.getElementById('q4ans').value = 'Chromium';
}

function q4c (){
    document.getElementById('q4ans').value = 'Francium';
}

function q5a (){
    document.getElementById('q5ans').value = 'Bola Ahmed Tinubu';
}

function q5b (){
    document.getElementById('q5ans').value = 'Barrack Hussein Obama';
}

function q5c (){
    document.getElementById('q5ans').value = 'Donald Trump';
}

function q6a (){
    document.getElementById('q6ans').value = 'Mercury';
}

function q6b (){
    document.getElementById('q6ans').value = 'Venus';
}

function q6c (){
    document.getElementById('q6ans').value = 'Mars';
}

function q7a (){
    document.getElementById('q7ans').value = 'Pounds';
}

function q7b (){
    document.getElementById('q7ans').value = 'Dollar';
}

function q7c (){
    document.getElementById('q7ans').value = 'Dinah';
}

function q8a (){
    document.getElementById('q8ans').value = 'Watt';
}

function q8b (){
    document.getElementById('q8ans').value = 'Joules';
}

function q8c (){
    document.getElementById('q8ans').value = 'Newton';
}

function q9a (){
    document.getElementById('q9ans').value = 'Beans';
}

function q9b (){
    document.getElementById('q9ans').value = 'Palm fruit';
}

function q9c (){
    document.getElementById('q9ans').value = 'Maize';
}

function q10a (){
    document.getElementById('q10ans').value = 'Executive';
}

function q10b (){
    document.getElementById('q10ans').value = 'Legislature';
}

function q10c (){
    document.getElementById('q10ans').value = 'Judiciary';
}



startbtn.onclick = function(e) {
    e.preventDefault();
    if (userName.value === '') {
        alert('Please enter your name to start the quiz.');
        return;
    }else{
        
        alert('Welcome ' + userName.value + '! Let\'s start the quiz!');
        loginForm.style.display = 'none';
        q1.style.display = 'block';
        questionCount = 1;
    }
}


//nextbtn.onclick = 
function nextQuestion() {
    //e.preventDefault();
    if (questionCount === 1) {
        loginForm.style.display = 'none';
        q1.style.display = 'none';
        q2.style.display = 'block';
    }else if (questionCount === 2) {
        q2.style.display = 'none';
        q3.style.display = 'block';
    }else if (questionCount === 3) {
        q3.style.display = 'none';
        q4.style.display = 'block';
    }else if (questionCount === 4) {
        q4.style.display = 'none';
        q5.style.display = 'block'; 
    }else if (questionCount === 5) {
        q5.style.display = 'none';
        q6.style.display = 'block';
    }
    else if (questionCount === 6) {
        q6.style.display = 'none';
        q7.style.display = 'block';
    }else if (questionCount === 7) {
        q7.style.display = 'none';
        q8.style.display = 'block';
    }else if (questionCount === 8) {
        q8.style.display = 'none';
        q9.style.display = 'block';
    }else if (questionCount ===9) {
        q9.style.display = 'none';
        q10.style.display = 'block';
    }
    else if (questionCount === q10) {
        
    }else{
        alert('You have completed the quiz!');
        return;
    }
    questionCount ++ ;
    console.log('Current Question Count: ' + questionCount);
    
}

//prevbtn.onclick = 
function previousQuestion(e) {
    //    e.preventDefault();
    if (questionCount == 2) {
        q1.style.display = 'block';
        q2.style.display = 'none';
    }else if (questionCount == 3) {
        q2.style.display = 'block';
        q3.style.display = 'none';
    }else if (questionCount == 4) {
        q3.style.display = 'block';
        q4.style.display = 'none';
    }else if (questionCount == 5) {
        q4.style.display = 'block';
        q5.style.display = 'none';
    }else if (questionCount == 6) {
        q5.style.display = 'block';
        q6.style.display = 'none';
    }else if (questionCount == 7) {
        q6.style.display = 'block';
        q7.style.display = 'none';
    }else if (questionCount == 8) {
        q7.style.display = 'block';
        q8.style.display = 'none';
    }else if (questionCount == 9) {
        q8.style.display = 'block';
        q9.style.display = 'none';
    }else if (questionCount == 10) {
        q9.style.display = 'block';
        q10.style.display = 'none';
    }
    questionCount--;
    console.log('Current Question Count: ' + questionCount);
    
    
}

//submitbtn.onclick =
let score = 0;
function submit() {
    
    if (q1ans === 'Cut') {
        score++;
    }
    if (q2ans === 'Mitochondria') {
        score++;
    }if (q3ans === 'Femur') {
        score++;
    }if (q4ans === 'Chromium') {
        score++;
    }if (q5ans === 'Donald Trump') {
        score++;
    }if (q6ans === 'Venus') {
        score++;
    }if (q7ans === 'Pounds') {
        score++;
    }if (q8ans === 'Watt') {
        score++;
    }if (q9ans === 'Maize') {
        score++;
    }if (q10ans === 'Judiciary') {
        score++;
    }

    resultpage.style.display = 'block';
    document.getElementById('resulthead').textContent = `Result for ${userName.value}`;
    document.getElementById('resultcomment').textContent = `You got ${score} points out of 10`;
    restart.addEventListener('click',()=>{
        location.reload;

    })
    }
    
    
    questionCount = 0; // Reset question count for next quiz attempt