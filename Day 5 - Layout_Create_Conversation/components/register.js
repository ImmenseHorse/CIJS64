import { Login } from "../../Day 4 - Authentication Continue/components/login.js";
import { InputGroup } from "./input-group.js";
import { setScreen } from "../../Day 4 - Authentication Continue/app.js"

class Register {
    $container;
    $title;

    $formRegister;

    $inputGroupEmail;
    $inputGroupDisplayName;
    $inputGroupPassword;
    $inputGroupConfirmedPassword;
    $linkToLogin;

    $feedbackMessage;

    $btnSubmit;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add('center', 'h-screen', 'flex-col');
        this.$title = document.createElement("h3");
        this.$title.innerHTML = "Register";

        this.$formRegister = document.createElement("form");
        this.$formRegister.addEventListener("submit", this.handleSubmit);

        this.$inputGroupEmail = new InputGroup(
            "email", "Email", "email");
        this.$inputGroupDisplayName = new InputGroup(
            "text", "Display name", "displayName"
        );
        this.$inputGroupPassword = new InputGroup(
            "password", "Password", "password"
        );
        this.$inputGroupConfirmedPassword = new InputGroup(
            "password", "Confirm Password", "confirmPassword"
        );

        this.$feedbackMessage = document.createElement("div");

        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.type = "submit";
        this.$btnSubmit.innerHTML = "Register";

        this.$linkToLogin = document.createElement("div");
        this.$linkToLogin.classList.add("btn-link");
        this.$linkToLogin.innerHTML = "< Back to Login";
        this.$linkToLogin.addEventListener('click', this.moveToLogin);
    }

    moveToLogin = () => {
        const login = new Login();
        setScreen(login);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();

        // Validate form
        const email = this.$inputGroupEmail.getInputValue();
        const displayName = this.$inputGroupDisplayName.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();
        const confirmPassword = this.$inputGroupConfirmedPassword.getInputValue();

        this.$inputGroupEmail.setError(null);
        this.$inputGroupDisplayName.setError(null);
        this.$inputGroupPassword.setError(null);
        this.$inputGroupConfirmedPassword.setError(null);

        if (!email) {
            this.$inputGroupEmail.setError("Email cannot be empty!");
        }

        if (!displayName) {
            this.$inputGroupDisplayName.setError("Display name cannot be empty");
        }

        if (password.length < 6) {
            this.$inputGroupPassword.setError("Password length must be greater than or equal to 6");
        }

        if (confirmPassword !== password) {
            this.$inputGroupConfirmedPassword.setError("Confirmed password not matched!");
        } else {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    this.$feedbackMessage.innerHTML = "Registered successfully! Please check your inbox";
                    firebase.auth().currentUser.sendEmailVerification();
                    this.$inputGroupEmail.setInputValue("");
                })
                .catch((error) => {
                    this.$feedbackMessage.innerHTML = error.toString();
                    console.log(error);
                });
        }
    }

    render() {
        this.$formRegister.appendChild(this.$inputGroupEmail.render());
        this.$formRegister.appendChild(this.$inputGroupDisplayName.render());
        this.$formRegister.appendChild(this.$inputGroupPassword.render());
        this.$formRegister.appendChild(this.$inputGroupConfirmedPassword.render());
        this.$formRegister.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$feedbackMessage);
        this.$container.appendChild(this.$formRegister);
        this.$container.appendChild(this.$linkToLogin);
        return this.$container;
    }
}

export { Register };