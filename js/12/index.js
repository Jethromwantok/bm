let staffdetails = [
    {
     Branch : 'Gwarimpa',
     Name : 'John Cross',
     Gender : 'Male',
     Email : 'johncross123@gmail.com',
     Age: 30,
     Position : 'Provost',
     Contract : 'Full-time',
     Salary : 500000,
     Marital_Status : 'Married',  
     Photo : './John Cross.jpeg'
    },
    {
        Branch : ' Gwarimpa', 
        Name : 'Emily Johnson',  
        Gender : 'Female',
        Email : 'emiljohnson@gmail.com',
        Age: 28,
        Position : 'Registrar',
        Contract : 'Part-time',
        Salary : 300000,
        Marital_Status : 'Single',
        Photo : './Emily Johnson.jpeg'
    },
    {
        Branch : 'Garki',
        Name : 'Michael Kors',
        Gender : 'Male',
        Email : 'mikekors@gmail.com',
        Age: 35,
        Position : 'Lecturer',
        Contract : 'Full-time',
        Salary : 450000,
        Marital_Status : 'Married',
        Photo : './Michael Kors.jpeg'
    },
    {
        Branch : 'Garki',
        Name : 'Sarah Connor',
        Gender : 'Female',
        Email : 'sarahconnor@gmail.com',
        Age: 32,
        Position : 'Head of HR',
        Contract : 'Part-time',
        Salary : 350000,
        Marital_Status : 'Single',
        Photo : './Sarah Connor.jpeg'
    },
    {
        Branch : 'Wuse',
        Name : 'David Beckham',
        Gender : 'Male',
        Email : 'bekhamdave@outlook.com',
        Age: 40,
        Position : 'Head of IT',
        Contract : 'Full-time',
        Salary : 550000,
        Marital_Status : 'Married',
        Photo : './David Beckham.jpeg'
    },
    {
        Branch : 'Wuse',
        Name : 'Emma Watson',
        Gender : 'Female',
        Email : 'watsemma3130@yahoo.com',
        Age: 29,
        Position : 'Accountant',
        Contract : 'Part-time',
        Salary : 320000,
        Marital_Status : 'Single',
        Photo : './Emma watson.jpeg'
    }
]

let branch = document.getElementById('branch');
let staffName = document.getElementById('name');
let gender = document.getElementById('gender');
let position = document.getElementById('position');
let email = document.getElementById('email');
let age = document.getElementById('age');
let contract = document.getElementById('contract');
let salary = document.getElementById('salary');
let mstatus = document.getElementById('status');
let photo = document.getElementById('image');

let show = document.getElementById('show');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let counter = 0;
let first = true;

show.addEventListener('click', ()=>{
    show.style.display = 'none';
    prev.style.display = 'block';
    next.style.display = 'block';
            branch.innerHTML = staffdetails[counter]['Branch'];
        staffName.innerHTML = staffdetails[counter]['Name'];
        gender.innerHTML = staffdetails[counter]['Gender'];
        position.innerHTML = staffdetails[counter]['Position'];
        email.innerHTML = staffdetails[counter]['Email'];
        age.innerHTML = staffdetails[counter]['Age'];
        contract.innerHTML = staffdetails[counter]['Contract'];
        salary.innerHTML = staffdetails[counter]['Salary'];
        mstatus.innerHTML = staffdetails[counter]['Marital_Status'];
        photo.src = staffdetails[counter]['Photo'];
})

next.addEventListener('click', () => {
    counter++;          
    if (counter > staffdetails.length-1) {
        counter = 0;
    }

        branch.innerHTML = staffdetails[counter]['Branch'];
        staffName.innerHTML = staffdetails[counter]['Name'];
        gender.innerHTML = staffdetails[counter]['Gender'];
        position.innerHTML = staffdetails[counter]['Position'];
        email.innerHTML = staffdetails[counter]['Email'];
        age.innerHTML = staffdetails[counter]['Age'];
        contract.innerHTML = staffdetails[counter]['Contract'];
        salary.innerHTML = staffdetails[counter]['Salary'];
        mstatus.innerHTML = staffdetails[counter]['Marital_Status'];
        photo.src = staffdetails[counter]['Photo'];
        console.log(counter);
        

    
        


})

prev.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = staffdetails.length - 1;
    }

    console.log(counter);
    
    branch.innerHTML = staffdetails[counter]['Branch'];
    staffName.innerHTML = staffdetails[counter]['Name'];
    gender.innerHTML = staffdetails[counter]['Gender'];
    position.innerHTML = staffdetails[counter]['Position'];
    email.innerHTML = staffdetails[counter]['Email'];
    age.innerHTML = staffdetails[counter]['Age'];
    contract.innerHTML = staffdetails[counter]['Contract'];
    salary.innerHTML = staffdetails[counter]['Salary'];
    mstatus.innerHTML = staffdetails[counter]['Marital_Status'];
    photo.src = staffdetails[counter]['Photo'];
    
})
