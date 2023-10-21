export default () => {
    const containerHome = document.createElement("div");
    
    const templateHome = `
        <form class="container">
            
            <p>Sua rede de teorias  da conspiração
            feita para compartilhar historias e 
            visão sobre </p>

            
            <button><a href="#login">ENTRAR</a></button>
            
        </form>
    `;
    containerHome.innerHTML = templateHome;

    return containerHome;
}