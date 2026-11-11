
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

    window.location.href = "pagina_inicial.html";
  });
}

function cancelarConsulta(elemento, tipo_consulta) {
  let elementoPai = null;
  let data_hora;

  if (tipo_consulta === "cartao") {
   elementoPai = elemento.parentElement.parentElement;  
   
   const data = elementoPai.querySelector(".data").textContent.trim();
   const hora = elementoPai.querySelector(".hora").textContent.trim();
   
   const partesData = data.split("de");
   
   const dia = partesData[0].trim();
   const mes = partesData[1].trim().slice(0, 3);
   
   data_hora = `${dia} ${mes}, ${hora}`;
  } else {
   elementoPai = elemento.parentElement;  

    data_hora = elementoPai
      .querySelector(".data")
      .textContent.trim();
    }
    
    const nome = elementoPai.querySelector(".nome").textContent.trim();
    
    const especialidade = elementoPai
    .querySelector(".especialidade")
    .textContent.split("•")[0]
    .trim();
    criarConfirmacaoCancelamento(nome, especialidade, data_hora);
  }

function criarConfirmacaoCancelamento(nome, especialidade, data_hora) {
  const elemento = document.createElement("div");
  elemento.classList.add("pop_up_cancelar_consulta");

  elemento.innerHTML = `
    <h3>Deseja cancelar essa consulta?</h3>

    <div class="infos_consulta">
      <div class="icone_avatar sm">
        <i class="fa-regular fa-user"></i>
      </div>

      <div class="infos_medico_pop_up">
        <h4 class="nome_medico">${nome}</h4>
        <p class="especialidade_medico">${especialidade}</p>
      </div>

      <span class="data_pop_up">
        <i class="fa-regular fa-calendar"></i>
        ${data_hora}
      </span>
    </div>

    <div class="pop_up_containers_botao">
      <button class="botao_voltar_pop_up_cancelar">
        Voltar
      </button>

      <button class="botao_conf_cancelamento_pop_up_cancelar">
        Confirmar Cancelamento
      </button>
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
    .querySelector(".botao_voltar_pop_up_cancelar")
    .addEventListener("click", () => {
      fecharPopup(elemento, overlay);
    });

  elemento
    .querySelector(".botao_conf_cancelamento_pop_up_cancelar")
    .addEventListener("click", () => {
      fecharPopup(elemento, overlay);
    });
}

function fecharPopup(elemento, overlay) {
  elemento.remove();
  overlay.remove();
}
