function validateForm() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (name === "" || password === "") {
        alert("Please fill in both name and password.");
    } 
    else if (password.length < 5) {
        alert("Password must be at least 5 characters long.");
    } 
    else {
        alert("Form submitted successfully!");
    }
}