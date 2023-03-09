// Error states

export function checkError(response) {
    if (response.status >= 200 && response.status <= 299) {
        return response.json();
    } else {
        throw Error(response.statusText);
    }
}

export function displayErrorMessage() {
    const theMain = document.querySelector('main');
   let pElement = `
      <p id="error-message"><span class="material-symbols-outlined">
            refresh
        </span> There seems to be an error, reload the page please.</p> 
   `;

   theMain.insertAdjacentHTML('beforeend', `${pElement}`);


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

//Wanneer de paginageladen is wordt de gebruikersnaam zichtbaar
export function replaceUserName() {
    const username = document.getElementById('username');

    window.addEventListener('load', () => {
        username.innerHTML =`Hi Keisha,`;
        username.classList.remove('loading-username');
    })
}

//  Bron: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m