export default () => {
    const containerHome = document.createElement("div");
    
    const templateHome = `
        <form class="container">
            <section class="left-container">
                <img src="./img/logo.png" />
            </section>
            <section class="right-container">
                <p class="paragraphPrincipal">Sua rede de teorias  da conspiração
                feita para compartilhar historias e 
                visão sobre </p>

                <button class="btnfunction"><a href="#login">ENTRAR</a></button>
            </section>
        </form>
    `;
    containerHome.innerHTML = templateHome;

    return containerHome;
}