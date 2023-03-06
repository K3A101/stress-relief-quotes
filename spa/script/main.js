import { fetchData } from "./modules/api.js";
import { replaceUserImg, replaceAppName, replaceUserName } from "./modules/states.js";
import { onRouteChanged } from "./modules/router.js";
import { openFilter, showSearchBar, filterBy } from "./modules/filter.js";


// functies
fetchData()

replaceUserImg()

replaceAppName()

replaceUserName()

//eventlisteners
const filterButton = document.querySelector(' button');
filterButton.addEventListener('click', openFilter);

const searchIcon = document.querySelector('.material-symbols-outlined');
searchIcon.addEventListener('click', showSearchBar)

searchIcon.addEventListener('click', filterBy)

//router
window.addEventListener("hashchange", onRouteChanged)

// Bron: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m