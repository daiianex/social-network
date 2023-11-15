export default () => {
    const containerFeed = document.createElement("div");
    
    const templateFeed = `
        <section>Deu certo!</section>
    `;
    containerFeed.innerHTML = templateFeed;

    return containerFeed;
}