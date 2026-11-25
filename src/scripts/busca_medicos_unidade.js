function inicializarBuscaMedicosUnidade() {
  const campoBusca = document.querySelector(".medicos_unidade .buscar_medico_input");
  const semResultados = document.querySelector(".medicos_unidade .sem_resultados");

  if (!campoBusca) {
    return;
  }

  function normalizar(texto) {
    return texto
      .normalize("NFD") 
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();
  }

  function filtrarMedicos() {
    const medicos = document.querySelectorAll(".lista_medicos_unidade .medico");

    const pesquisa = normalizar(campoBusca.value);

    medicos.forEach(function (medico) {
      const nome = normalizar(medico.querySelector("h4").textContent);
      const especialidade = normalizar(medico.querySelector("p").textContent);

      const corresponde =
        !pesquisa || nome.includes(pesquisa) || especialidade.includes(pesquisa);

      if (corresponde) {
        medico.style.display = ""; // Volta ao estilo definido no CSS
      } else {
        medico.style.display = "none";
      }
    });
  }

  campoBusca.addEventListener("input", filtrarMedicos);
}