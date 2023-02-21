
//Variabele
const main = document.querySelector("main ");
const section = document.getElementById('content');
const loader = document.querySelectorAll('.loading');
let globalData;
console.log(section)


//eventlisteners

fetchData()

replaceUserImg()

replaceAppName()


window.addEventListener("hashchange", onRouteChanged)
//Logica

// Hier ga ik data ophalen uit met de fetch API
function fetchData() {
  showLoader()
  fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
    .then(checkError)
    .then((data) => {
      globalData = data;

      addData(data)
      console.log(data)
    })
    .catch((error) => {
      console.log(error);
    });

}
// Met deze functie plaats ik de data in de HTML
function addData(data) {


  let html = ''
  data.forEach(item => {

    html = `
          <article>
           <section>
              <q>${item.quote}</q>

              <p class="author">${item.author}</p>
            </section>
            <section>
              <img src="${item.avatar}" alt="Avatar">
              <p>${item.bio}</p>
            </section>
            <ul>
              <li>${item.tags}</li>                
            </ul>             
          </article>
      `;

    section.insertAdjacentHTML("beforeend", html)
    // tagElement.insertAdjacentHTML("beforeend", `# ` + `${tag}`)
  });

}


function checkError(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

function showLoader() {

  loader.forEach(item => {
    item.classList.add("display");
    setTimeout(() => {
      item.classList.remove("display");
    }, 1000)
  })


}

function hideLoader() {
  loader.forEach(item => {
    item.classList.remove("display");
  })

}

// Nadat de pagina wordt geladen worden de container vervangen door een afbeelding
function replaceUserImg() {
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
function replaceAppName() {
  const textTitle = document.getElementById("text-title");
  // const appTitle = document.querySelector('loading-app-name');

  window.addEventListener('load', () => {
    textTitle.innerHTML = `Design <span>quotes</span>`;
    textTitle.classList.remove('loading-app-name');
  })
}

// Bron: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m

function onRouteChanged() {
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