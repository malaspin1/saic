
const campoBusca = document.querySelector(".bucar_medico_input");
const medicos = document.querySelectorAll(".medico");

campoBusca.addEventListener("input", function () {
    const pesquisa = campoBusca.value
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    medicos.forEach(function (medico) {
        const nome = medico.querySelector("h4").textContent
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const especialidade = medico.querySelector("p").textContent
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

        const corresponde =
            nome.includes(pesquisa) ||
            especialidade.includes(pesquisa);

        medico.style.display = corresponde ? "" : "none";
    });
});

const seta = document.getElementById("filtro");
const filtros = document.getElementById("filtros");

seta.addEventListener("click", function () {

    if (filtros.style.display === "block") {
        filtros.style.display = "none";
        seta.style.transform = "rotate(0deg);"
    } else {
        filtros.style.display = "block";
        seta.style.transform = "rotate(180deg);"
    }
});