const
    email = document.querySelector("#email"),
    submit = document.getElementById("submit"),
    error = document.querySelector("#error-text"),
    validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

email.addEventListener("keyup", () => {
    const emailValue = document.querySelector("#email").value.trim();
    if (emailValue === "" || emailValue.match(validate)) {
        email.classList.add("valid");
        email.classList.remove("error");
        error.classList.remove("error");
    }
    else {
        email.classList.add("error");
        email.classList.remove("valid");
    }
});

submit.onclick = () => {
    const emailValue = document.querySelector("#email").value.trim();
    if (emailValue.match(validate)) {
        email.classList.remove("error");
        error.classList.remove("error");
    } else {
        email.classList.add("error");
        error.classList.add("error");
    }
};