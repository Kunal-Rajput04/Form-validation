document.addEventListener('DOMContentLoaded', function() {
   
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    
    function validateName() {
        const nameError = document.getElementById('name-error');
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            return false;
        } else {
            nameError.style.display = 'none';
            return true;
        }
    }

    
    function validateEmail() {
        const emailError = document.getElementById('email-error');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            return false;
        } else {
            emailError.style.display = 'none';
            return true;
        }
    }

  
    function validatePassword() {
        const passwordError = document.getElementById('password-error');
        if (passwordInput.value.length < 8) {
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    }

   
    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(event) {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (!isNameValid || !isEmailValid || !isPasswordValid) {
            event.preventDefault(); 
        }
    });
});
