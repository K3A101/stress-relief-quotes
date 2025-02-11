// Variabele

export function addTags(data) {
    const tagsContainer = document.querySelector('header section:nth-of-type(2) ul');

    let listItem = ''
data.forEach(item => {
  listItem = `<li>${item.tags}</li>`;

  tagsContainer.insertAdjacentHTML('beforeend', `${listItem}`)
});
}

// Als je op de button filter klikt dan open je het filter nmenu met tags
export function openFilter() {
  const menu = document.querySelector('header section:nth-of-type(2) ul');
  menu.classList.toggle('show-container');
}