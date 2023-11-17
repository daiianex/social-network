import { errorsFirebase, validatedMessage } from "../config/loginValidation.js";
import { registerNewUser } from "../config/authentication.js";

export default () => {
    const containerRegister = document.createElement("div");

    const templateRegister = `
        <form class="container">
            <section class="left-container">
                <img class="logo" src="img/logo.png" alt="Logo">
            </section>
            <section class="right-container">
                <p class="loginParagraph">Entre na sua conta</p>
                <section class=group-inputs>
                    <input type="text" class="input name" id="inputName" placeholder="NOME COMPLETO" /><br>
                    <input type="email" class="input Email" id="inputEmail" placeholder="E-MAIL" /><br>
                    <input type="password" class="input Senha" id="inputPassword" placeholder="SENHA" /><br>
                </section>
                <p id="message" class="successMessage menssage"></p>
                <br><button class="btnfunction" id="btn-Register">Criar conta</button><br>
                </section>
            </section>
        </form>
    `;

    containerRegister.innerHTML = templateRegister;

    const btnSignUp = containerRegister.querySelector("#btn-Register");
    const name = containerRegister.querySelector("#inputName");
    const email = containerRegister.querySelector("#inputEmail");
    const password = containerRegister.querySelector("#inputPassword");

    btnSignUp.addEventListener("click", (e) => {
        e.preventDefault();
        const validation = validatedMessage(name.value, email.value, password.value);
        if (validation !== "") {
            const message = containerRegister.querySelector("#message");
            message.innerHTML = validation;
        } else {
            registerNewUser(name.value, email.value, password.value)
                .then(() => {
                    window.location.hash = "#feed";
                })
                .catch((error) => {
                    const errorMessage = errorsFirebase(error.code);
                    const message = containerRegister.querySelector("#message");
                    message.innerHTML = errorMessage;
                });
        }
    })

    return containerRegister;
}
