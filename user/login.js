const email = document.getElementById("email");
const password = document.getElementById("password");
let errMessage = document.getElementById("errMessage");

function login(event) {
    event.preventDefault();

    //Validate inputs
    if (email.value.trim() === "" || !isValidEmail(email.value)) {
        errMessage.innerText = "Please enter your email.";
        return;
    }

    if ((password.value).length < 8) {
        errMessage.innerText = "Password must be at least 8 characters long.";
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // const teacher = users.find(user => user.email === email.value && user.password === password.value);

    const findTeacher = () => {
        let teacher;
        users.forEach((user)=> {
            if(user.email == email.value && user.password == password.value) {
                teacher = user;
            }
        })
        return teacher; // return teacher object or undefined(false);
    }

    let teacher = findTeacher();

    if (!teacher) {
        errMessage.innerText = "User doesn't exist";
        return;
    }
    else {
        let currentUser = {
            "email": teacher.email,
            "password": teacher.password,
            "name": teacher.name,
            "token": generateRandomString(),
        }
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.href = "./Dashboard.html";
    }

};

let currectUser = JSON.parse(localStorage.getItem("currentUser"));
if (currectUser) {
    window.location.href = "./dashboard.html";
}

// generate random string
function generateRandomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 16; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
}

function isValidEmail(email) {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

