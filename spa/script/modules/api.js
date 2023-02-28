import { showLoader } from "./states.js";
import { checkError } from "./states.js";
import { addTags } from "./filter.js";
import { addData } from "./render.js";


export let globalData;

export function fetchData() {
    showLoader()
    fetch('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1')
        .then(checkError)
        .then((data) => {

            addTags(data)
            addData(data)

            console.log(data)
        })
        .catch((error) => {
            console.log(error);
        });

}