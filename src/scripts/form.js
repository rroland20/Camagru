;(function() {

    const form = document.querySelector("#form-signin");
    const inputEmail = document.querySelector("input[name='email']");
    const inputUsername  = document.querySelector("input[name='username']");
    const inputPassword  = document.querySelector("input[name='password']");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailValue = inputEmail.value;
        const usernameValue = inputUsername.value;
        const passwordValue = inputPassword.value;

        const signUpData = {
            email: emailValue,
            username: usernameValue,
            password: passwordValue,
        };

        fetch("/api/signup/", {
            method: "POST",
            body: JSON.stringify(signUpData),
        })
        .then((response) => {
            console.log("response", response);
        })
        .catch((error) => {
            console.error(error);
        });
    });

})();