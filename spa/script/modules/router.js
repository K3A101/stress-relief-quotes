import { globalData } from "./api.js";

export function onRouteChanged() {
    // console.log(window.location.hash);
    const hash = window.location.hash;
    const routerView = document.getElementById('router-view');
    const homePage = document.getElementById('content');



    if (!(routerView instanceof HTMLElement)) {
        throw new ReferenceError("No router view element available for rendering");
    }

    switch (hash) {
        case "#content":
            routerView.innerHTML = "<h1>Home Page</h1>";
            break;

        case "#about":
            console.log(globalData)
            routerView.innerHTML = "<h1>About Page</h1>";
            break;


        default:
            routerView.innerHTML = "<h1>404 - Page not found</h1>";
            break;
    }
}
