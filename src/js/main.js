import home from "./home.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {

        switch(window.location.hash){
            case " ":
                main.appendChild(home());
                break;
                default:
                main.appendChild(home());
        }
    })
}

window.addEventListener("load", () => {
    main.appendChild(home());
    init();
})