// Variabele

export function addTags(data) {
    const tagsContainer = document.querySelector('header section:nth-of-type(2) ul');

    let listItem = ''
data.map(item => {
  listItem = `<li>${item.tags}</li>`;

  tagsContainer.insertAdjacentHTML('beforeend', `${listItem}`)
});
}

