import home from "./home.js";
import login from "./login.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch(window.location.hash){
            case "#home":
                main.appendChild(home());
                break;
            case "#login":
                main.appendChild(login());
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