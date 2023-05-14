const email = document.getElementById("email");
const password = document.getElementById("password");
let errMessage = document.getElementById("errMessage");
let addCart=document.querySelector('.cart');


addCart.addEventListener("click", () => {
    alert("Please login to continue!!");
})

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

    const findUser = () => {
        let profile;
        users.forEach((user)=> {
            if(user.email == email.value && user.password == password.value) {
                profile = user;
            }
        })
        return profile; // return profile object or undefined(false);
    }

    let profile = findUser();

    if (!profile) {
        errMessage.innerText = "User doesn't exist";
        return;
    }

    else {
        let currentUser = {
            "email": profile.email,
            "password": profile.password,
            "name": profile.name,
            "token": generateRandomString(),
        }
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.href = "../shop/index.html";
    }

};

let currectUser = JSON.parse(localStorage.getItem("currentUser"));
if (currectUser) {
    window.location.href = "../shop/index.html";
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

