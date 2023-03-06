
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

const nameElement = document.getElementById("userName");
const emailElement = document.getElementById("userEmail");
const message = document.getElementById("message");

nameElement.innerText = "Welcome Back : " + currentUser.name;
emailElement.innerText = "Your Email id : " + currentUser.email;

const form = document.querySelector('form');
form.addEventListener("submit", (e) => {

    // e.preventDefault();
    const oldPassword = document.getElementById("password").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword = document.getElementById("confirm-newPassword").value;

    if (oldPassword !== currentUser.password) {
        message.innerText = "Enter correct old password";
        return;
    }

    if(newPassword == currentUser.password){
        message.innerText = "Enter correct old password";
        return;
    }

    if (newPassword !== confirmNewPassword) {
        message.innerText = "Password must be same";
        return;
    }

    if (newPassword.length < 8) {
        message.innerText = "Password must be at least 8 characters long.";
        return;
    }

    currentUser = {
        "email": currentUser.email,
        "password": newPassword,
        "name": currentUser.name,
        "token": currentUser.token,
    }

    // update the password in users also
    let users = JSON.parse(localStorage.users);
    users = users.map((user)=> {
        if(user.email == currentUser.email) {
            user.password = newPassword;
        }
        return user;
    })

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    message.innerText = "Password changed successfully. ";

});

const logoutButton = document.getElementById("logout");
logoutButton.addEventListener('click', () => {
    currentUser = null;
    localStorage.setItem("currentUser", null);
    window.location.href = "./login.html";
});



