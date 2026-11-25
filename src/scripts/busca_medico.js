  function inicializarBuscaMedico() {
    const campoBusca = document.querySelector(".buscar_medico_input");
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
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase()
    }

    function filtrarMedicos() {
      const pesquisa = normalizar(campoBusca.value);

      const especialidadesSelecionadas = [
        ...listaEspecialidades.querySelectorAll('input[type="checkbox"]:checked'), // Transforma NodeList em Array
      ].map(function (checkbox) {
        return normalizar(checkbox.nextElementSibling.textContent); // Cria uma lista com os labels normalizados
      });                         // nextElementSibiling = Proximo elemento no HTML (LABEL)

      const unidadesSelecionadas = [
        ...listaUnidades.querySelectorAll('input[type="checkbox"]:checked'), // Transforma NodeList em Array
      ].map(function (checkbox) {
        return checkbox.id; // Pega o ID do checkbox, que é o nome da unidade
      });

      medicos.forEach(function (medico) {
        const nome = normalizar(medico.querySelector("h4").textContent);
        const especialidade = normalizar(medico.querySelector("p").textContent);
        const unidadesMedico = (medico.dataset.unidades || "") // Se dataset for undefined, utiliza ""
          .split(",") // Transforma em array das unidades
          .map(function (unidade) { // Outro array, com as unidades passadas pelo trim()
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

        if (corresponde){
          medico.style.display = "" // Volta ao estilo definido no css
        }
        else {
          medico.style.display = "none"
        }
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
      } else {
        filtros.style.display = "block";
      }
    });

    function filtrarOpcoesCheckbox(campo, lista) { // Busca dos filtros
      campo.addEventListener("input", function () {
        const pesquisa = normalizar(campo.value);

        lista.querySelectorAll(".checkbox").forEach(function (opcao) {
          const texto = normalizar(opcao.querySelector("label").textContent);

          if (texto.includes(pesquisa)){
            opcao.style.display = "" // Volta ao estilo do CSS
          }
          else {
            opcao.style.display = "none"
          }
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
