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

//Password Hide and Show feature 
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function() {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.textContent = type === 'password' ? 'Show' : 'Hide';
});
