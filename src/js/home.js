export default () => {
    const containerHome = document.createElement("div");

    const templateHome = `
        <form class="container">
            <img class="logo" src="../img/logo.png" alt="Logo" />
            <p>Sua rede de teorias  da conspiração
            Feita para compartilhar historias e 
            visão sobre </p>
            <button>ENTRAR</button>
        </form>
    `;

    containerHome.innerHTML = templateHome;

    return containerHome;
}