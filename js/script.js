// Password Strength Checker
const passwordInput = document.getElementById('password');
passwordInput.addEventListener('input', function() {
    const password = passwordInput.value;
});
// Form Validation
const form = document.getElementById('form');
const emailInput = document.querySelector('input[name="text_field"][placeholder="Email"]');

form.addEventListener('submit', function(event) {
    if (!isValidEmail(emailInput.value)) {
        event.preventDefault(); // Prevent form submission if email is invalid
        alert('Please enter a valid email address.');
    }
});
function isValidEmail(email) {
    // Implement email validation logic (e.g., using regular expressions)
    return /\S+@\S+\.\S+/.test(email);
}