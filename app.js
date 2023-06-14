const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');
const passwordMismatch = document.querySelector('.passwordMismatch');

let password = ''

passwordInput.addEventListener('change', function(e) {
    password = e.target.value;
})

confirmPasswordInput.addEventListener('input', function(e) {
    let confirmPassword = e.target.value;
    let result = checkPassword(password,confirmPassword)
})

function checkPassword(password,confirmPassword) {
    if(password === confirmPassword){
        passwordInput.classList.remove('invalid');
        confirmPasswordInput.classList.remove('invalid');
        passwordMismatch.classList.add('hidden')
        return true;
    }
    else{
        passwordInput.classList.add('invalid');
        confirmPasswordInput.classList.add('invalid');
        passwordMismatch.classList.remove('hidden')
        return false;
    }
}