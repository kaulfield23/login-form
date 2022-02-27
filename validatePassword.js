const password = document.getElementById('passwordInput');
const confirmPassword = document.getElementById('confirmPassword');
const warning = document.getElementById('warning')

confirmPassword.addEventListener('keyup', () => {
    const isNotMatching = password.validity.patternMismatch;

    if (password.value !== confirmPassword.value && !isNotMatching ||
        password.value !== confirmPassword && isNotMatching) {

        confirmPassword.setCustomValidity(confirmPassword.title);
        warning.innerText = "❌ Password is not proper. Please check it out again"

    } else if (password.value == confirmPassword.value && isNotMatching) {

        warning.innerText = "❌ Password is not proper. Please check it out again"

    } else {

        password.setCustomValidity('')
        confirmPassword.setCustomValidity('')
        warning.innerText = "✔️ Proper password!"

    }
})