// function signin()
// {
//     alert("You have Signed in!")
    
// }

function signin(event) {
    event.preventDefault(); // Prevent form submission
    
    let usernameField = document.querySelector('input[type="username"]');
    let emailField = document.querySelector('input[type="email"]');
    let passwordFields = document.querySelectorAll('input[type="password"]');

    let username = usernameField.value;
    let email = emailField.value;
    let password = passwordFields[0].value;
    let confirmPassword = passwordFields[1].value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields!");
        return;
    }

    // if (/\d/.test(email)) { 
    //     alert("Numbers can't be used in the email!");
    //     return;
    // }

    // Check if email is valid
    let emailPattern = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // Check if password meets security requirements
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must have at least 8 characters, one uppercase letter, one number, and one special character (@, #, $, etc.)");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("You have Signed in!");

    // Clear input fields after successful submission
    usernameField.value = "";
    emailField.value = "";
    passwordFields[0].value = "";
    passwordFields[1].value = "";
}


    