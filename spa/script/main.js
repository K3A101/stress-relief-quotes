import { fetchData } from "./modules/api.js";
import { replaceUserImg, replaceAppName, replaceUserName } from "./modules/states.js";
import { onRouteChanged } from "./modules/router.js";
import { updateDisplayData } from "./modules/render.js";

//Variabele
const searchInput = document.getElementById('search');
let newArray = [];

// functies
fetchData()

filterDataByName()

replaceUserImg()

replaceAppName()

replaceUserName()

//Filter functionaliteit
function filterDataByName(){
  const url = 'https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1';
  
  fetch(url)
.then(response => response.json())
.then(data => {
    newArray = data;
    updateDisplayData(newArray)
})
.catch(error => console.error(error));
}

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

//router
window.addEventListener("hashchange", onRouteChanged)

// Bron: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m
//Bron: https://flaviocopes.com/es-modules/
//Bron: https://www.youtube.com/watch?v=R8rmfD9Y5-c