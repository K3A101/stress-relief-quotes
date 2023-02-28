import { fetchData } from "./modules/api.js";
import { replaceUserImg } from "./modules/states.js";
import { replaceAppName } from "./modules/states.js";
import { replaceUserName } from "./modules/states.js";
import { onRouteChanged } from "./modules/router.js";
import { openFilter } from "./modules/filter.js";



// functies
fetchData()

replaceUserImg()

replaceAppName()

replaceUserName()

//eventlisteners
const filterButton = document.querySelector('header section button');
filterButton.addEventListener('click', openFilter)

//router
window.addEventListener("hashchange", onRouteChanged)


// Bron: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m

