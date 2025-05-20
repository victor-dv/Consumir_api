const container = document.getElementById("cards-container");

const truncate = (text, limit) => {
  return text.length > limit ? text.substring(0, limit) + "…" : text;
};

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    const posts = data.sort(() => 0.5 - Math.random()).slice(0, 6);

    posts.forEach((post) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
            <div class="top-bar"></div>
            <h3 class="card-titulo">${post.title}</h3>
            <p class="card-descricao">${truncate(post.body, 120)}</p>
            <div class="decoracao"></div>
          `;

      container.appendChild(card);
    });
  })
  .catch((error) => {
    container.innerHTML = `<p>Erro ao carregar os artigos 😢</p>`;
    console.error("Erro:", error);
  });
