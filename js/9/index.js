 // is used to prevent the default action of an event, such as a form submission or a link click. In this case, it is used to prevent the default form submission when the user clicks the "Start Quiz" button, allowing us to handle the quiz logic without reloading the page.

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
let q10 = document.getElementById('Questionq10');
let loginForm = document.getElementById('loginForm');
let userName = document.getElementById('name');
let questionCount = 0;
let nextbtn = document.getElementById('nextQuestionBtn');
let prevbtn = document.getElementById('previousQuestionBtn');
let submitbtn = document.getElementById('submitBtn');

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


nextbtn.onclick = function(e) {
    e.preventDefault();
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

prevbtn.onclick = function(e) {
    e.preventDefault();
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
    }else if (questionCount == q10) {
        q9.style.display = 'block';
        q10.style.display = 'none';
    }else{
        alert('You have reached the beginning of the quiz!');
        return;
    }

    questionCount--;
    console.log('Current Question Count: ' + questionCount);
    

}

submitbtn.onclick = function(e) {
    e.preventDefault();
    
    // Here you can handle the submission logic, like calculating the score or saving answers.
    alert('Thank you for completing the quiz, ' + userName.value + '!');
    loginForm.style.display = 'block';
    q1.style.display = 'none';
    q2.style.display = 'none';
    q3.style.display = 'none';
    q4.style.display = 'none';
    q5.style.display = 'none';
    q6.style.display = 'none';
    q7.style.display = 'none';
    q8.style.display = 'none';
    q9.style.display = 'none';
    q10.style.display = 'none';
    
    questionCount = 0; // Reset question count for next quiz attempt
}






