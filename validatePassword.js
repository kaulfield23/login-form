const password = document.getElementById('passwordInput');
const confirmPassword = document.getElementById('confirmPassword');
const warning = document.querySelector('.warning')
const warning2 = document.querySelector('.warning2')

password.addEventListener('keyup', () => {
    const isNotMatchingForRegEx = password.validity.patternMismatch;

    if (!isNotMatchingForRegEx) {
        warning.innerText = "✔️"
        password.setCustomValidity('');
    } else {
        warning.innerText = "❌"
    }
})

confirmPassword.addEventListener('keyup', () => {
    const isNotMatchingForRegEx = password.validity.patternMismatch;

    if (password.value !== confirmPassword.value && !isNotMatchingForRegEx ||
        password.value !== confirmPassword && isNotMatchingForRegEx ||
        password.value == confirmPassword.value && isNotMatchingForRegEx
    ) {
        warning2.innerText = ""
        confirmPassword.setCustomValidity(confirmPassword.title);

    } else {
        confirmPassword.setCustomValidity('')
        warning2.innerText = "✔️"
    }
})