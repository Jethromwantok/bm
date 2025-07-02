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
}

class Admin extends Account {
    constructor(name, email, phoneNumber) {
        super(name, email, phoneNumber);
        this.accounts = [];
    }

    registerStaff(name, email, phoneNumber) {
        const staff = new Staff(name, email, phoneNumber);
        this.accounts.push(staff);
        console.log(`Staff registered: ${staff.name}`);
        return staff;
    }

    registerStudent(name, email, phoneNumber) {
        const student = new Student(name, email, phoneNumber);
        this.accounts.push(student);
        console.log(`Student registered: ${student.name}`);
        return student;
    }

    deleteAccount(account) {
        this.accounts = this.accounts.filter(acc => acc !== account);
        console.log(`Account deleted: ${account.name}`);
    }

    viewAllAccounts() {
        console.log("All accounts:");
        this.accounts.forEach(acc => {
            console.log(`${acc.constructor.name}: ${acc.name}, ${acc.email}`);
        });
    }
}

class Staff extends Account {
    constructor(name, email, phoneNumber) {
        super(name, email, phoneNumber);
        this.coursesTaught = []; // Always an array
        this.registrationRequests = []; // {student, course}
    }

    addCourse(course) {
        this.coursesTaught.push(course);
        console.log(`Course added: ${course}`);
    }

    viewCourses() {
        console.log("Courses taught:");
        this.coursesTaught.forEach(course => console.log(course));
    }

    viewRegistrationRequests() {
        console.log("Registration Requests:");
        this.registrationRequests.forEach((req, idx) => {
            console.log(`${idx + 1}. ${req.student.name} requests to enroll in ${req.course}`);
        });
    }

    approveRegistration(index) {
        const req = this.registrationRequests[index];
        if (req) {
            req.student.courses.push(req.course);
            console.log(`Approved: ${req.student.name} enrolled in ${req.course}`);
            this.registrationRequests.splice(index, 1);
        }
    }

    rejectRegistration(index) {
        const req = this.registrationRequests[index];
        if (req) {
            console.log(`Rejected: ${req.student.name} not enrolled in ${req.course}`);
            this.registrationRequests.splice(index, 1);
        }
    }

    receiveRegistrationRequest(student, course) {
        this.registrationRequests.push({ student, course });
        console.log(`Received registration request from ${student.name} for ${course}`);
    }

    assignGrade(student, course, grade) {
        if (!student.grades) student.grades = {};
        student.grades[course] = grade;
        console.log(`Grade assigned to ${student.name} for ${course}: ${grade}`);
    }
}

class Student extends Account {
    constructor(name, email, phoneNumber) {
        super(name, email, phoneNumber);
        this.courses = [];
        this.grades = {};
    }

    requestCourseRegistration(course, staff) {
        staff.receiveRegistrationRequest(this, course);
        console.log(`Requested registration for ${course} (pending approval)`);
    }

    viewCourses() {
        console.log("Enrolled courses:");
        this.courses.forEach(course => console.log(course));
    }

    viewGrades() {
        console.log("Grades:");
        Object.entries(this.grades).forEach(([course, grade]) => {
            console.log(`${course}: ${grade}`);
        });
    }

    submitAssignment(course, assignment) {
        console.log(`Assignment submitted for ${course}: ${assignment}`);
    }
}

export { Account, Admin, Staff, Student };