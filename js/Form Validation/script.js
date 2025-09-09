document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let valid = true;

    // Reset error messages
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    // Email validation
    if (!email.includes("@")) {
      document.getElementById("emailError").textContent =
        "Email must contain '@'.";
      valid = false;
    }

    // Password validation
    if (password.length < 8) {
      document.getElementById("passwordError").textContent =
        "Password must be at least 8 characters.";
      valid = false;
    }

    if (!valid) {
      event.preventDefault(); // Stop form submission
    } else {
      alert("Form submitted successfully!");
    }
  });
