function inicializarBuscaMedico() {
  const campoBusca = document.querySelector(".bucar_medico_input");
  const medicos = document.querySelectorAll(".medico");

  const seta = document.getElementById("filtro");
  const filtros = document.getElementById("filtros");

  const listasCheckbox = document.querySelectorAll("#filtros .inputs_checkbox");

  if (!campoBusca || !seta || !filtros || listasCheckbox.length < 2) {
    return;
  }

  const listaEspecialidades = listasCheckbox[0];
  const listaUnidades = listasCheckbox[1];

  function normalizar(texto) {
    return texto
      .trim()
      .toLowerCase()
  }

  function filtrarMedicos() {
    const pesquisa = normalizar(campoBusca.value);

    const especialidadesSelecionadas = [
      ...listaEspecialidades.querySelectorAll('input[type="checkbox"]:checked'),
    ].map(function (checkbox) {
      return normalizar(checkbox.nextElementSibling.textContent);
    });

    const unidadesSelecionadas = [
      ...listaUnidades.querySelectorAll('input[type="checkbox"]:checked'),
    ].map(function (checkbox) {
      return checkbox.id;
    });

    medicos.forEach(function (medico) {
      const nome = normalizar(medico.querySelector("h4").textContent);

      const especialidade = normalizar(medico.querySelector("p").textContent);

      const unidadesMedico = (medico.dataset.unidades || "")
        .split(",")
        .map(function (unidade) {
          return unidade.trim();
        });

      const correspondePesquisa =
        !pesquisa ||
        nome.includes(pesquisa) ||
        especialidade.includes(pesquisa);

      const correspondeEspecialidade =
        especialidadesSelecionadas.length === 0 ||
        especialidadesSelecionadas.some(function (item) {
          return especialidade.includes(item);
        });

      const correspondeUnidade =
        unidadesSelecionadas.length === 0 ||
        unidadesSelecionadas.some(function (unidade) {
          return unidadesMedico.includes(unidade);
        });

      const corresponde =
        correspondePesquisa && correspondeEspecialidade && correspondeUnidade;

      medico.style.display = corresponde ? "" : "none";
    });
  }

  campoBusca.addEventListener("input", filtrarMedicos);

  document
    .querySelectorAll('#filtros input[type="checkbox"]')
    .forEach(function (checkbox) {
      checkbox.addEventListener("change", filtrarMedicos);
    });

  seta.addEventListener("click", function () {
    seta.classList.toggle("filtro");
    seta.classList.toggle("filtro-invertido");

    if (filtros.style.display === "block") {
      filtros.style.display = "none";

      document.querySelector(".barra_lateral").style.minHeight = "100vh";
    } else {
      filtros.style.display = "block";

      document.querySelector(".barra_lateral").style.minHeight = "200vh";
    }
  });

  function filtrarOpcoesCheckbox(campo, lista) {
    campo.addEventListener("input", function () {
      const pesquisa = normalizar(campo.value);

      lista.querySelectorAll(".checkbox").forEach(function (opcao) {
        const texto = normalizar(opcao.querySelector("label").textContent);

        opcao.style.display = texto.includes(pesquisa) ? "" : "none";
      });
    });
  }

  filtrarOpcoesCheckbox(
    document.querySelector(".buscar_especialidades_input"),
    listaEspecialidades,
  );

  filtrarOpcoesCheckbox(
    document.querySelector(".buscar_unidade_input"),
    listaUnidades,
  );
}
