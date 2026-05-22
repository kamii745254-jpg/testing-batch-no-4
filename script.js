// Constructor Function

function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

    // Object Method

    this.introduce = function () {
        return `Hi, my name is ${this.name} and I study ${this.course}.`;
    };

    this.courseDetails = function () {
        return `${this.name} is enrolled in ${this.course}.`;
    };
}

// Array to store students

const students = [];

// Add Student Function

function addStudent() {

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const course = document.getElementById("course").value;

    // Validation

    if (name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    // Create Object

    const student = new Student(name, age, course);

    // Push into Array

    students.push(student);

    // Render Students

    displayStudents();

    // Clear Inputs

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

// Display Students

function displayStudents() {

    const studentList = document.getElementById("student-list");

    studentList.innerHTML = "";

    students.forEach((student, index) => {

        studentList.innerHTML += `
        
        <div class="student-card">
            <h3>${student.name}</h3>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Course:</strong> ${student.course}</p>

            <p>${student.introduce()}</p>

            <button onclick="showCourse(${index})">
                Show Course Details
            </button>
        </div>
        
        `;
    });
}

// Show Course Details

function showCourse(index) {
    alert(students[index].courseDetails());
}

// Digital Clock Feature

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").innerText =
        `${hours}:${minutes}:${seconds}`;
}

// Run Every Second

setInterval(updateClock, 1000);

updateClock();