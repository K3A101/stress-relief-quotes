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
            window.location = "index.html"
            break;

        case "#about":
            console.log(globalData)
            routerView.innerHTML = `  
            
            <section id="about">
           
            <article>
                <h2>Over Design quotes</h2>
                <p>Design quotes is een applicatie voor CMD studenten, die opzoek zijn naar 
                inspirerende design quotes. Deze citaten zijn van bekende personen in de wereld van het web. </p>

                <p> Design Quotes is gemaakt door Keisha Alexander </p>
            </article>
            
        </section>
`;
            
            break;


        default:
            routerView.innerHTML = "<h1>404 - Page not found</h1>";
            break;
    }
}
