import { fetchData } from "./modules/api.js";
import { replaceUserImg, replaceAppName, replaceUserName } from "./modules/states.js";
import { onRouteChanged } from "./modules/router.js";
// import { openFilter, showSearchBar,filterBy } from "./modules/filter.js";

//Variabele
// const filterButton = document.querySelector(' button');
// const searchIcon = document.querySelector('.material-symbols-outlined');
// functies
fetchData()

replaceUserImg()

replaceAppName()

replaceUserName()

//eventlisteners
// filterButton.addEventListener('click', openFilter);
// searchIcon.addEventListener('click', showSearchBar)
// searchIcon.addEventListener('click', filterBy)

const searchInput = document.getElementById('search');
const theContent = document.getElementById('content')
let newArray = [];

fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
.then(response => response.json())
.then(data => {
    newArray = data;
    updateDisplayData(newArray)
})
.catch(error => console.error(error));

searchInput.addEventListener('input', ()=> {
    const query = searchInput.value.toLowerCase();

    if(newArray.length > 0) {
        const filteredArray = newArray.filter(item => {
             return item.author.toLowerCase().includes(query);
            //  item.tags.toLowerCase().includes(query);
        });
        
                updateDisplayData(filteredArray)
    }
});


function updateDisplayData(data) {
    theContent.innerHTML = '';


    let html = ''
    data.forEach(item => {

        html += `
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
    });

    theContent.insertAdjacentHTML('beforeend', html);
}


//router
window.addEventListener("hashchange", onRouteChanged)

// Bron: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m