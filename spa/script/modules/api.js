import { showLoader } from "./states.js";
import { checkError } from "./states.js";
import { addTags } from "./filter.js";
import { addData } from "./render.js";
import { displayErrorMessage } from "./states.js";
import { searchInput } from "./filter.js";

// export const searchInput = document.getElementById('search');


export let globalData;

export function fetchData() {
    showLoader()
    fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
        .then(checkError)
        .then((data) => {

            addTags(data)
            addData(data)
          
        })
        .catch((error) => {



            displayErrorMessage()

        });
   
    }