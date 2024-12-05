const form = document.querySelector('form');
const email = document.querySelector('#email');
const zipCode = document.querySelector('#zipCode');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

const emailError = document.querySelector('.emailError');
const zipCodeError = document.querySelector('.zipCodeError');
const passwordError = document.querySelector('.passwordError');
const confirmPasswordError = document.querySelector('.confirmPasswordError');

const submitBtn = document.querySelector('button');

function validateEmail() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Email is required.';
        return false;
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email.';
        return false;
    } else {
        emailError.textContent = '';
        return true;
    }
}

function validateZipCode() {
    if (zipCode.validity.valueMissing) {
        zipCodeError.textContent = 'Zip Code is required.';
        return false;
    }
    else if (zipCode === 'number') {
        zipCodeError.textContent = 'Please enter a valid Zip Code.';
        return false;
    } else {
        zipCodeError.textContent = '';
        return true;
    }
}

function validatePassword() {
    if (password.validity.valueMissing) {
        passwordError.textContent = 'Password is required.';
        return false;
    } else if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        return false;
    } else {
        passwordError.textContent = '';
        return true;
    }
}

function validateConfirmPassword() {
    if (confirmPassword.validity.valueMissing) {
        confirmPasswordError.textContent = 'Password is required.';
        return false;
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        return false;
    } else {
        confirmPasswordError.textContent = '';
        return true;
    }
}

email.addEventListener('blur', () => {
    validateEmail();
});

zipCode.addEventListener('input', () => {
    validateZipCode();
});

password.addEventListener('input', () => {
    validatePassword();
});

confirmPassword.addEventListener('input', () => {
    validateConfirmPassword();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validateEmail() && validateZipCode() && validatePassword() && validateConfirmPassword()) {
        alert('Form submitted successfully!');
    }
});