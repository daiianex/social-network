export default () => {
    const containerLogin = document.createElement("div");

    const templateLogin = `
        <form class="logContainer">
            <p class="loginParagraph">Entre na sua conta</p>

            <input type="email" class="input Email" id="inputEmail" placeholder="Insira seu Email" /><br>
            <input type="password" class="input Senha" id="inputSenha" placeholder="Insira sua senha" /><br>

            <a href="" > <p class='reset-password'>Esqueceu sua senha?</p></a><br>

            <p id="message" class="successMessage menssage"></p>

            <br><button class="btn entrar" id="btn-Entrar">Entrar</button><br>
            <button class="btn google" id="buttonGoogle">Entrar com o Google
            </button>
            
            <p> Não tem conta?
            <a href="#register">Criar</a></p><br>
        </form>
    `;

    containerLogin.innerHTML = templateLogin;

    return containerLogin;
}
