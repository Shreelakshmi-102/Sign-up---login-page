// function login()
// {
//     alert("You have logged in!")
// }

function login(event) {
    event.preventDefault(); // Prevent form submission
    
    let usernameField = document.querySelector('input[type="username"]');
    let passwordField = document.querySelector('input[type="password"]');

    let username = usernameField.value;
    let password = passwordField.value;

    if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }

    alert("You have logged in!");

    // Clear input fields after successful submission
    usernameField.value = "";
    passwordField.value = "";
}


    