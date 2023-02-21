import { fetchData } from "./modules/api.js";
import { replaceUserImg } from "./modules/states.js";
import { replaceAppName } from "./modules/states.js";
import { onRouteChanged } from "./modules/router.js";



//eventlisteners

fetchData()

replaceUserImg()

replaceAppName()


window.addEventListener("hashchange", onRouteChanged)
//Logica



// Bron: https://dev.to/vaishnavs/displaying-loading-animation-on-fetch-api-calls-1e5m

