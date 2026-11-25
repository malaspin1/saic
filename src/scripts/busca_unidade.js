function inicializarBuscaUnidade() {
  const campoBusca = document.querySelector(".buscar_unidade_input");
  const unidades = document.querySelectorAll(".unidades .unidade");
  const semResultados = document.querySelector(".busca_unidade .sem_resultados");

  if (!campoBusca || unidades.length === 0) {
    return;
  }

  function normalizar(texto) {
    return texto
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .trim()
      .toLowerCase();
  }

  function filtrarUnidades() {
    const pesquisa = normalizar(campoBusca.value);
    let encontradas = 0;

    unidades.forEach(function (unidade) {
      const nome = normalizar(unidade.querySelector("h4").textContent);
      const corresponde = !pesquisa || nome.includes(pesquisa);

      unidade.style.display = corresponde ? "" : "none";

      if (corresponde) {
        encontradas++;
      }
    });

    if (semResultados) {
      semResultados.style.display = encontradas === 0 ? "block" : "none";
    }
  }

  campoBusca.addEventListener("input", filtrarUnidades);
}
