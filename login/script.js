document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@example.com" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Invalid email or password");
    }
});