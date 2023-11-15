export default () => {
    const containerHome = document.createElement("div");
    
    const templateHome = `
        <form class="container">

            <img class="logo" src="img/logo.png" alt="Logo">

            <section class="infosHome">
                <p>Sua rede de teorias  da conspiração
                feita para compartilhar historias e 
                visão sobre </p>
            <section>    

            <button class="btnPrincipal"><a href="#login">ENTRAR</a></button>
            
        </form>
    `;
    containerHome.innerHTML = templateHome;

    return containerHome;
}