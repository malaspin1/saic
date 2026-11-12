function sair() {
  const elemento = document.createElement("div");
  elemento.classList.add("pop_up_sair");

  elemento.innerHTML = `
    <h3>Deseja sair?</h3>
    <div>
      <p>Tem certeza que deseja sair da sua conta?</p>
      <p>Ao sair, você precisará entrar novamente para acessar sua conta.</p>
    </div>
    <div class="pop_up_sair_container_botoes">
      <button class="botao_pop_up botao_voltar_pop_up">Voltar</button>
      <button class="botao_pop_up botao_sair_pop_up">Sair</button>
    </div>
  `;

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  document.body.appendChild(overlay);
  document.body.appendChild(elemento);

  overlay.addEventListener("click", () => {
    fecharPopup(elemento, overlay);
  });

  elemento
    .querySelector(".botao_voltar_pop_up")
    .addEventListener("click", () => {
      fecharPopup(elemento, overlay);
    });

  elemento.querySelector(".botao_sair_pop_up").addEventListener("click", () => {
    fecharPopup(elemento, overlay);

    window.location.assign(new URL("pagina_inicial.html", window.location.href).href);
  });
}

function fecharPopup(elemento, overlay) {
  elemento.remove();
  overlay.remove();
}
