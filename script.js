document.addEventListener("DOMContentLoaded", function () {
    const togglePassword = document.querySelector(".toggle-password");
    const passwordField = document.querySelector("#password");

    togglePassword.addEventListener("click", function () {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            togglePassword.textContent = "🙈"; // Hide password
        } else {
            passwordField.type = "password";
            togglePassword.textContent = "👁"; // Show password
        }
    });
});
