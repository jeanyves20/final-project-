var passwordEl = document.getElementById("password");
var CpasswordEl = document.getElementById("confirmPassword");
var form = document.getElementsByTagName("form")[0];

const MIN_PASSWORD_LENGHT = 6;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (passwordEl.value.length >= MIN_PASSWORD_LENGHT) {
        if (passwordEl.value == CpasswordEl.value) {
            location.reload();
        }
        else {
            var confirmPassError = document.getElementById('pass-confirm-error');
            confirmPassError.className = "passError";
            confirmPassError.innerText = "Sorry, Password don't match !";
        }
    }
    else
    {
        var passwordError = document.getElementById('pass-error');
        passwordError.className = "passError";
        passwordError.innerText = `Too Short, ${MIN_PASSWORD_LENGHT} characters min !`;
    }
});
