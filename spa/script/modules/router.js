

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
           
            routerView.innerHTML = `  
            
            <section id="about">
           
            <article>
                <h2>Over Design quotes</h2>
                <p>Design quotes is a single page application where students can view quotes from different design principles to gain inspiration for their projects.</p>

                <p> Design Quotes is made by Keisha Alexander </p>
            </article>
            
        </section>
`;
            
            break;


        default:
            routerView.innerHTML = "<h1>404 - Page not found</h1>";
            break;
    }
}
// Bron: https://dev.to/aminnairi/a-router-without-a-web-server-in-vanilla-javascript-3bmg