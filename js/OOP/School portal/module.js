class Account {
    constructor(name, email, phoneNumber) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        
    }
    login() {
        console.log(`Welcome ${this.name}!`);
    }
    logout() {
        console.log(`Goodbye ${this.name}!`);
    }
    updateProfile(newName, newEmail, newPhoneNumber) {
        this.name = newName;
        this.email = newEmail;
        this.phoneNumber = newPhoneNumber;
        console.log(`Profile updated: ${this.name}, ${this.email}, ${this.phoneNumber}`);
    }
    viewProfile() {
        console.log(`Profile: ${this.name}, ${this.email}, ${this.phoneNumber}`);
    }

    registerAccount(name, email, phoneNumber) {
        const newAccount = new Account(name, email, phoneNumber);
        console.log(`Account registered: ${newAccount.name}`);
        return newAccount;
    }

}

class Admin extends Account {
    constructor(name, email, phoneNumber) {
        super(name, email, phoneNumber);


    }

    deleteAccount(account) {
        console.log(`Account deleted: ${account.name}`);
    }

    viewAllAccounts(accounts) {
        console.log("All accounts:");
        accounts.forEach(account => {
            console.log(`${account.name}, ${account.email}, ${account.phoneNumber}`);
        });
    }

    registerAccount(name, email, phoneNumber) {
        const newAccount = new Account(name, email, phoneNumber);
        console.log(`Account registered: ${newAccount.name}`);
        return newAccount;
    }



}

class Staff extends Account {
    constructor(name, email, phoneNumber, coursetaught) {
        super(name, email, phoneNumber);
        this.coursetaught = coursetaught;

    }

    assignTask(task) {
        console.log(`Task assigned: ${task}`);
    }

    viewTasks(tasks) {
        console.log("Tasks:");
        tasks.forEach(task => {
            console.log(task);
        });
    }

    addCourse(course) {
        this.coursetaught.push(course);
        console.log(`Course added: ${course}`);
    }

    viewCourses() {
        console.log("Courses taught:");
        this.coursetaught.forEach(course => {
            console.log(course);
        });
    }

    assignGrade(student, grade) {
        console.log(`Grade assigned to ${student.name}: ${grade}`);
    }

    addStudent(student) {
        console.log(`Student added: ${student.name}`);
    }
}

class Student extends Account {
    constructor(name, email, phoneNumber, courses) {
        super(name, email, phoneNumber);
        this.courses = courses;
    }

    enrollCourse(course) {
        this.courses.push(course);
        console.log(`Enrolled in course: ${course}`);
    }

    viewCourses() {
        console.log("Enrolled courses:");
        this.courses.forEach(course => {
            console.log(course);
        });
    }

    submitAssignment(assignment) {
        console.log(`Assignment submitted: ${assignment}`);
    }

    viewGrades(grades) {
        console.log("Grades:");
        grades.forEach(grade => {
            console.log(grade);
        });
    }
}

export { Account, Admin, Staff, Student };