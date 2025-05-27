let questionCount;
nextbtn.onclick = function(e) {
    e.preventDefault();
    if (questionCount == 1) {
        loginForm.style.display = 'none';
        Q1.style.display = 'block';
    }else if (questionCount == 2) {
        Q1.style.display = 'none';
        Q2.style.display = 'block';
    }else if (questionCount == 3) {
        Q2.style.display = 'none';
        Q3.style.display = 'block';
    }else if (questionCount == 4) {
        Q3.style.display = 'none';
        Q4.style.display = 'block'; 
    }else if (questionCount == 5) {
        Q4.style.display = 'none';
        Q5.style.display = 'block';
    }
    else if (questionCount == 6) {
        Q5.style.display = 'none';
        Q6.style.display = 'block';
    }else if (questionCount == 7) {
        Q6.style.display = 'none';
        Q7.style.display = 'block';
    }else if (questionCount == 8) {
        Q7.style.display = 'none';
        Q8.style.display = 'block';
    }else if (questionCount == 9) {
        Q8.style.display = 'none';
        Q9.style.display = 'block';
    }
    else if (questionCount == 10) {
        Q9.style.display = 'none';
        Q10.style.display = 'block';
    }else{
        alert('You have completed the quiz!');
        return;
    }
    questionCount++;
}

prevbtn.onclick = function(e) {
    e.preventDefault();
    if (questionCount == 2) {
        Q1.style.display = 'block';
        Q2.style.display = 'none';
    }else if (questionCount == 3) {
        Q2.style.display = 'block';
        Q3.style.display = 'none';
    }else if (questionCount == 4) {
        Q3.style.display = 'block';
        Q4.style.display = 'none';
    }else if (questionCount == 5) {
        Q4.style.display = 'block';
        Q5.style.display = 'none';
    }else if (questionCount == 6) {
        Q5.style.display = 'block';
        Q6.style.display = 'none';
    }else if (questionCount == 7) {
        Q6.style.display = 'block';
        Q7.style.display = 'none';
    }else if (questionCount == 8) {
        Q7.style.display = 'block';
        Q8.style.display = 'none';
    }else if (questionCount == 9) {
        Q8.style.display = 'block';
        Q9.style.display = 'none';
    }else if (questionCount == 10) {
        Q9.style.display = 'block';
        Q10.style.display = 'none';
    }else{
        alert('You have reached the beginning of the quiz!');
        return;
    }

    questionCount--;

}


