const form = document.getElementById("userform");
form.addEventListener("submit", (event) => {
    const username = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    isValid = true
    if (username === "") {
        alert("Name is required")
        isValid = false
    }
    else if (!email.includes("@")) {
        alert("Please enter a valid email.");
        isValid = false;
    }
    else if (password.length < 10) {
        alert("Password must be at least 10 characters");
        isValid = false;
    }
    if(!isValid){
        event.preventDefault();
    }

})