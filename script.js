document.getElementById("contactForm").addEventListener("submit", function(e) {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        alert("Please enter your name");
        e.preventDefault();
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter valid email (example@gmail.com)");
        e.preventDefault();
    }
});