var passwordEl = document.getElementById("password");
var CpasswordEl = document.getElementById("confirmPassword");
var form = document.getElementsByTagName("form")[0];




form.onsubmit = function validateForm(e) {
    if (
        passwordEl.length != 0
    ) {
        if (passwordEl.value == CpasswordEl.value) {
            alert("match")
        }
        else {
            alert("Passwords do not match")
            return
        }
    }

}
