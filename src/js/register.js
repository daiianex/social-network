export default () => {
    const containerRegister = document.createElement("div");

    const templateRegister = `
        <form class="container">
            <div class="containerPrincipal">
                <p class="loginParagraph">Entre na sua conta</p>

                <input type="text" class="name" placeholder="Nome Completo" />
                <input type="email" class="input Email" id="inputEmail" placeholder="Insira seu Email" /><br>
                <input type="password" class="input Senha" id="inputSenha" placeholder="Insira sua senha" /><br>
                <p id="message" class="successMessage menssage"></p>
                <br><button class="btnPrincipal" id="btn-Entrar">Criar conta</button><br>
            </div>
        </form>
    `;

    containerRegister.innerHTML = templateRegister;

    return containerRegister;
}
