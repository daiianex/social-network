import feed from "./feed.js";
import home from "./home.js";
import login from "./login.js";
import register from "./register.js";

const main = document.querySelector("#root");

const init = () => {
    window.addEventListener("hashchange", () => {
        main.innerHTML = "";
        switch (window.location.hash) {
            case "#home":
                main.appendChild(home());
                break;
            case "#login":
                main.appendChild(login());
                break;
            case "#register":
                main.appendChild(register());
                break;
            case "#feed":
                main.appendChild(feed());
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