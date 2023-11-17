export default () => {
    const containerLogin = document.createElement("div");

    const templateLogin = `
        <form class="container">
            <section class="left-container">
                <img src="./img/logo.png" />
            </section>
            <section class="right-container">
                <p class="loginParagraph">Entre na sua conta</p>
                <button class="btnGoogle" id="buttonGoogle">Entrar com o Google </button>
                <p>OU</p>
                <input type="email" class="input Email" id="inputEmail" placeholder="Insira seu Email" /><br>
                <input type="password" class="input Senha" id="inputSenha" placeholder="Insira sua senha" /><br>
                <p id="message" class="successMessage menssage"></p>
                <br><button class="btnfunction" id="btn-Entrar">Entrar</button><br>
                <button class="btnfunction"> Esqueceu sua senha? </button><br>          
                <p> Não tem conta?
                <a href="#register">Criar</a></p><br>
            </section>
        </form>
    `;

    containerLogin.innerHTML = templateLogin;

    return containerLogin;
}
