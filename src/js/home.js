export default () => {
    const containerHome = document.createElement("div");
    
    const templateHome = `
        <form class="container">
            <img class="logo" src="src\img\logo.png" />            
            <p>Sua rede de teorias  da conspiração
            feita para compartilhar historias e 
            visão sobre </p>

            
            <button><a href="#login">ENTRAR</a></button>
            
        </form>
    `;
    containerHome.innerHTML = templateHome;

    return containerHome;
}