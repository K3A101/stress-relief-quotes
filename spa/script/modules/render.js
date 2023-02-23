
export function addData(data) {
    const section = document.getElementById('content');

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