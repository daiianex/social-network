import { loginGoogle, loginUser } from "../config/authentication.js";
import { validatedMessage, validatedEmailReset, errorsFirebase } from "../config/loginValidation.js";

export default () => {
    const containerLogin = document.createElement("div");

    const templateLogin = `
        <form class="container">
            <section class="content">
                <img class="logo" src="img/logo.png" alt="Logo">

                <section class="infosLogin">
                    <p class="loginParagraph">Entre na sua conta</p>

                    <button class="btnGoogle" id="btn-Google">Entrar com o Google </button>
                    <p>OU</p>
                    <input type="email" class="input Email" id="input-Email" placeholder="Insira seu Email" /><br>
                    <input type="password" class="input Senha" id="input-Senha" placeholder="Insira sua senha" /><br>
                    <p id="message" class="successMessage menssage"></p>
                    <br><button class="btnPrincipal" id="btn-Entrar">Entrar</button><br>
                    <button class="btnPrincipal"> Esqueceu sua senha? </button><br>          
                    <p> Não tem conta?
                    <a href="#register">Criar</a></p><br>
                </section>
            </section>
        </form>
    `;

    containerLogin.innerHTML = templateLogin;

    const btnGoogleLogin = containerLogin.querySelector("#btn-Google");
    const btnLoginWithEmail = containerLogin.querySelector("#btn-Entrar");

    btnGoogleLogin.addEventListener("click", (e) => {
        e.preventDefault();
        loginGoogle()
            .then(() => {
                window.location.hash = "#feed";
            })
            .catch((error) => {
                const errorMessage = errorsFirebase(error.code);
                const message = containerLogin.querySelector("#message");
                message.innerHTML = errorMessage;
            });
    });

    btnLoginWithEmail.addEventListener("click", (e) => {
        e.preventDefault();
        const validation = validatedMessage(email.value, password.value);
        if (validation !== "") {
            const message = containerLogin.querySelector("#message");
            message.innerHTML = validation;
        } else {
            loginUser(email.value, password.value)
                .then(() => {
                    window.location.hash = "#feed";
                })
                .catch((error) => {
                    const errorMessage = errorsFirebase(error.code);
                    const message = containerLogin.querySelector("#message");
                    message.innerHTML = errorMessage;
                })
        }
    })

    return containerLogin;
}
