const form = document.querySelector("form"),
    boxEmail = form.querySelector(".email"),
    textEmail = boxEmail.querySelector(".text-email"),
    boxPassword = form.querySelector(".password"),
    textPassword = boxPassword.querySelector(".text-password"),
    boxPasswords = form.querySelector(".passwords"),
    textPasswords = boxPasswords.querySelector(".text-passwords");
    
function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!textEmail.value.match(emailPattern)) {
        boxEmail.classList.add("invalid");
    }else {
        boxEmail.classList.remove("invalid");
    }
}

function checkPassword() {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!textPassword.value.match(passwordPattern)) {
        boxPassword.classList.add("invalid");
    }else {
        boxPassword.classList.remove("invalid");
    }
}

function confirmPassword() {
    if (textPassword.value !== textPasswords.value || textPasswords.value === "") {
        boxPasswords.classList.add("invalid");
    }else {
        boxPasswords.classList.remove("invalid");
    }
}
    
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    checkPassword();
    confirmPassword();

    textEmail.addEventListener("keyup", checkEmail);
    textPassword.addEventListener("keyup", checkPassword);
    textPasswords.addEventListener("keyup", confirmPassword);

    if (
        !boxEmail.classList.contains("invalid") &&
        !boxPassword.classList.contains("invalid") &&
        !boxPasswords.classList.contains("invalid")
    ) {
        location.href = form.getAttribute("action");
    }
});

const eyeIcon = document.querySelectorAll(".show-hide");
eyeIcon.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const input = eyeIcon.parentElement.querySelector("input");
        if (input.type === "password") {
            eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            input.type = "text";
        }else {
            eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
            input.type = "password";
        }
    });
});