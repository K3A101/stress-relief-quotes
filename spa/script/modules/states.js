// Error states

export function checkError(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        throw Error(response.statusText);
    }
}

// Loading states
// De pagina toont een skeleton aan 
export function showLoader() {
    const loader = document.querySelectorAll('.loading');
    loader.forEach(item => {
        item.classList.add("display");
        setTimeout(() => {
            item.classList.remove("display");
        }, 1000)
    })

}
//// Nadat de pagina wordt geladen worden de container vervangen door een afbeelding
export function replaceUserImg() {
    const imageContainer = document.getElementById('image-container');
    // Hier maak ik een nieuwe img tag
    const image = new Image()
    image.src = "../spa/images/mijn-foto.jpg";
    image.addEventListener('load', () => {
        imageContainer.style.backgroundImage = `url(${image.src})`; /* Replace the background color with the loaded image */
        imageContainer.classList.remove('placeholder');
    })

}

// Wanneer de pagina geladen is wordt de titel design quotes zichtbaar
export function replaceAppName() {
    const textTitle = document.getElementById("text-title");
    // const appTitle = document.querySelector('loading-app-name');

    window.addEventListener('load', () => {
        textTitle.innerHTML = `Design <span>quotes</span>`;
        textTitle.classList.remove('loading-app-name');
    })
}

export function replaceUserName() {
    const username = document.getElementById('username');

    window.addEventListener('load', () => {
        username.innerHTML =`Hi Keisha,`
        username.classList.remove('loading-username');
    })
}

