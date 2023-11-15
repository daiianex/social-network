export default () => {
    const containerHome = document.createElement("div");
    
    const templateHome = `
        <section class="container">
            <section class="content first-content">
                <section class="first-column">
                    <img class="logo" src="img/logo.png" alt="Logo">
                </section>
                <section class="second-column">
                    <p>Sua rede de teorias  da conspiração
                    feita para compartilhar historias e 
                    visão sobre </p>
                    <button class="btnPrincipal"><a href="#login">ENTRAR</a></button>
                </section>
            <section>    
        </section>
    `;
    containerHome.innerHTML = templateHome;

    return containerHome;
}