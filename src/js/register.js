import { errorsFirebase, validatedMessage } from "../config/loginValidation.js";
import { registerNewUser } from "../config/authentication.js";

export default () => {
    const containerRegister = document.createElement("div");

    const templateRegister = `
        <form class="container">
            <section class="content">
                <section class="first-column">
                    <img class="logo" src="img/logo.png" alt="Logo">
                </section>
                <section class="second-column">
                    <p class="loginParagraph">Entre na sua conta</p>

                    <input type="text" class="name" id="inputName" placeholder="Nome Completo" />
                    <input type="email" class="input Email" id="inputEmail" placeholder="Insira seu Email" /><br>
                    <input type="password" class="input Senha" id="inputPassword" placeholder="Insira sua senha" /><br>
                    <p id="message" class="successMessage menssage"></p>
                    <br><button class="btnPrincipal" id="btn-Register">Criar conta</button><br>
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
