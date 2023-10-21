export default () => {
    const containerRegister = document.createElement("div");

    const templateRegister = `
        <form class="logContainer">
            <p class="loginParagraph">Entre na sua conta</p>

            <button class="btn google" id="buttonGoogle">Entrar com o Google </button>
            <p>OU</p>
            <input type="email" class="input Email" id="inputEmail" placeholder="Insira seu Email" /><br>
            <input type="password" class="input Senha" id="inputSenha" placeholder="Insira sua senha" /><br>
            <p id="message" class="successMessage menssage"></p>
            <br><button class="btn entrar" id="btn-Entrar">Entrar</button><br>
            <button class="btnReset"> Esqueceu sua senha? </button><br>          
            <p> Não tem conta?
            <a href="#register">Criar</a></p><br>
        </form>
    `;

    containerRegister.innerHTML = templateRegister;

    return containerRegister;
}
