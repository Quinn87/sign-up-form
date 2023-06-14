const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');

let password = ''

passwordInput.addEventListener('change', function(e) {
    password = e.target.value;
})

confirmPasswordInput.addEventListener('input', function(e) {
    let confirmPassword = e.target.value;
    checkPassword(password,confirmPassword)
})

function checkPassword(password,confirmPassword) {
    if(password === confirmPassword){
        passwordInput.classList.remove('invalid');
        confirmPasswordInput.classList.remove('invalid');
        return true;
    }
    else{
        passwordInput.classList.add('invalid');
        confirmPasswordInput.classList.add('invalid');
        return false;
    }
}