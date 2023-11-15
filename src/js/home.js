export default () => {
    const containerHome = document.createElement("div");
    
    const templateHome = `
        <form class="container">
            <img src="./img/logo.png" />
            <section class="textAndbtn">
                <p>Sua rede de teorias  da conspiração
                feita para compartilhar historias e 
                visão sobre </p>

                <button class="btnStart"><a href="#login">ENTRAR</a></button>

            </section>
            
        </form>
    `;
    containerHome.innerHTML = templateHome;

    return containerHome;
}