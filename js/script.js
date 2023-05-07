const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
const form = document.getElementById('form');
const mailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const mailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const button = document.getElementById('button');

const userLogin = 'admin@admin.com';
const userPassword = 'password123';

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const mail = mailInput.value;
    const password = passwordInput.value;
    const isValid = EMAIL_REGEX.test(mailInput.value) && passwordInput.value.length >= 6;

    if (!isValid)
        return;

    if (mail !== userLogin || password !== userPassword) {
        alert('нет такого пользователя')
        mailInput.value = '';
        passwordInput.value = '';
        return;
    }

    window.location = 'https://www.google.com';

})

mailInput.addEventListener("focusout", function () {
    const isValid = EMAIL_REGEX.test(mailInput.value)

    if (!isValid) {
        mailError.innerText = 'Значение введено не по формату (name@domain.com)'
    } else {
        mailError.innerText = '';
    }
})
passwordInput.addEventListener("focusout", function () {
    const isValid = passwordInput.value.length >= 6;

    if (!isValid) {
        passwordError.innerText = 'короткий пароль (< 6 символов),'
    } else {
        passwordError.innerText = '';
    }
})

mailInput.addEventListener("change", isEmpty);
passwordInput.addEventListener("change", isEmpty);

function isEmpty() {
    const isEmpty = mailInput.value.length === 0 || passwordInput.value.length === 0;
    button.disabled = isEmpty;
}
