var isLoggedIn = false;

function signup(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");


    //Validate inputs

    if (name.trim() === "") {
        errorMessage.innerText = "Please enter your name.";
        return;
    }
    if (email.trim() === "" || !isValidEmail(email)) {
        errorMessage.innerText = "Please enter a valid email address.";
        return;
    }
    
    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match.";
        return;
    }
    if (password.length < 8) {
        errorMessage.innerText = "Password must be at least 8 characters long.";
        return;
    }

    //Create user
    const user = {
        email: email,
        password: password,
        name: name
    };

    //Get users from local storage or create empty array
    let users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];

    // function userAlreadyExist() {
    //     let flag = false;
    //     users.forEach((user) => {
    //         if (user.email == email) {
    //             flag = true;
    //         }
    //     })
    
    //     return flag
    // }

    //Check if user with the same email aready exists
    if (users.some(u => u.email === email)) {
        errorMessage.innerText = "User with this email already exists.";
        return;
    }

    //Add new user to array
    users.push(user);

    //Save updated users to local storage
    localStorage.setItem("users", JSON.stringify(users));

    //Redirect to login page
    window.location.href = "./login.html";
}


function isValidEmail(email) {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

