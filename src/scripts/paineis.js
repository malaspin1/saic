const codigos_html = {
    inicio: `
  <!-- BARRA LATERAL -->
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li class="ativo">
          <button href="#"><i class="fa-solid fa-house"></i> Início</button>
        </li>
        <li>
          <button onclick="trocarPagina('consultas_marc')" href="painel_paciente2.html"><i
              class="fa-regular fa-calendar-check"></i> Consultas
            Marcadas</button>
        </li>
        <li>
          <button onclick="trocarPagina('historico_cons')" href="#"><i class="fa-regular fa-clock"></i> Histórico de
            Consultas</button>
        </li>
        <li>
          <button onclick="trocarPagina('buscar_med')" href="#"><i class="fa-solid fa-magnifying-glass"></i> Buscar
            Médicos</button>
        </li>
        <li>
          <button onclick="trocarPagina('perfil')" href="#"><i class="fa-regular fa-user"></i> Perfil</button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()" href="pagina_inicial.html"><i class="fa-solid fa-arrow-right-from-bracket"></i>
            Sair</button>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- CONTEÚDO PRINCIPAL -->
  <main>
    <header>
      <div>
        <h1>Olá, Miguel!</h1>
        <p>Como podemos cuidar da sua saúde hoje?</p>
        <div class="acoes_header">
          <button class="botao botao_contorno">
            <i class="fa-regular fa-clock"></i> Ver Histórico Completo
          </button>
          <button class="botao botao_fundo">
            <i class="fa-solid fa-circle-plus"></i> Agendar Nova Consulta
          </button>
        </div>
      </div>

      <div class="perfil_usuario">
        <span class="avatar">M</span>
        <div>
          <strong>Miguel Silva</strong>
          <small>Paciente</small>
        </div>
      </div>
    </header>

    <div class="grid_painel">
      <div class="coluna_principal">
        <!-- PRÓXIMA CONSULTA -->
        <section class="cartao">
          <span class="etiqueta_verde">PRÓXIMA CONSULTA</span>

          <div class="info_pessoa">
            <div class="icone_avatar"><i class="fa-regular fa-user"></i></div>
            <div>
              <h2>Dr. Ricardo Almeida</h2>
              <p><span class="ponto_verde"></span> Cardiologia • CRM 12345</p>
            </div>
          </div>

          <div class="rodape_cartao">
            <div class="data_hora">
              <span><i class="fa-regular fa-calendar"></i> 15 de Setembro,
                2026</span>
              <span><i class="fa-regular fa-clock"></i> 14:30</span>
            </div>
            <button class="botao_cancelar">Cancelar</button>
          </div>
        </section>

        <!-- CONSULTAS MARCADAS -->
        <section>
          <div class="titulo_seccao">
            <h2>Consultas Marcadas</h2>
            <a href="#">Ver todas</a>
          </div>

          <div class="lista_consultas">
            <div class="cartao item_consulta">
              <div class="info_pessoa">
                <div class="icone_avatar sm">
                  <i class="fa-regular fa-user"></i>
                </div>
                <div>
                  <h3>Dra. Ana Costa</h3>
                  <p>Dermatologia</p>
                </div>
              </div>
              <span class="data"><i class="fa-regular fa-calendar"></i> 20 Set, 10:00</span>
              <button class="botao_cancelar">Cancelar</button>
            </div>

            <div class="cartao item_consulta">
              <div class="info_pessoa">
                <div class="icone_avatar sm">
                  <i class="fa-regular fa-user"></i>
                </div>
                <div>
                  <h3>Dr. Paulo Santos</h3>
                  <p>Ortopedia</p>
                </div>
              </div>
              <span class="data"><i class="fa-regular fa-calendar"></i> 05 Out, 09:25</span>
              <button class="botao_cancelar">Cancelar</button>
            </div>

            <div class="cartao item_consulta">
              <div class="info_pessoa">
                <div class="icone_avatar sm">
                  <i class="fa-regular fa-user"></i>
                </div>
                <div>
                  <h3>Dr. João T.</h3>
                  <p>Oftalmologista</p>
                </div>
              </div>
              <span class="data"><i class="fa-regular fa-calendar"></i> 15 Out, 14:30</span>
              <button class="botao_cancelar">Cancelar</button>
            </div>
          </div>
        </section>
      </div>

      <!-- COLUNA DIREITA -->
      <aside>
        <section class="cartao cartao_historico">
          <div class="titulo">
            <i class="fa-regular fa-clock"></i>
            <h3>Histórico de Consultas</h3>
          </div>
          <span class="numero">08</span>
          <p>Consultas realizadas nos últimos 6 meses</p>
          <button class="botao_detalhes">Ver detalhes</button>
        </section>
      </aside>
    </div>
  </main>

  <script src="../../scripts/paineis.js"></script>`,
    consultas_marc: `
    <!-- BARRA LATERAL -->
    <aside class="barra_lateral">
        <h1>saic</h1>
        <nav>
            <ul>
                <li>
                    <button onclick="trocarPagina('inicio')" href="#"><i class="fa-solid fa-house"></i> Início</button>
                </li>
                <li  class="ativo">
                    <button href="painel_paciente2.html"><i
                            class="fa-regular fa-calendar-check"></i> Consultas
                        Marcadas</button>
                </li>
                <li>
                    <button onclick="trocarPagina('historico_cons')" href="#"><i class="fa-regular fa-clock"></i>
                        Histórico de
                        Consultas</button>
                </li>
                <li>
                    <button onclick="trocarPagina('buscar_med')" href="#"><i class="fa-solid fa-magnifying-glass"></i>
                        Buscar
                        Médicos</button>
                </li>
                <li>
                    <button onclick="trocarPagina('perfil')" href="#"><i class="fa-regular fa-user"></i> Perfil</button>
                </li>
                <li class="divisor"></li>
                <li>
                    <button onclick="sair()" href="pagina_inicial.html"><i
                            class="fa-solid fa-arrow-right-from-bracket"></i>
                        Sair</button>
                </li>
            </ul>
        </nav>
    </aside>

    <!-- CONTEÚDO PRINCIPAL -->
    <main>
        <header>
            <div>
                <h1>Olá, Miguel!</h1>
                <p>Essas são suas consultas marcadas!</p>
            </div>
            </div>

            <div class="perfil_usuario">
                <span class="avatar">M</span>
                <div>
                    <strong>Miguel Silva</strong>
                    <small>Paciente</small>
                </div>
            </div>
        </header>

        <section class="consultas_marcadas">
            <h2>Consultas Marcadas</h2>
            <div class="consulta">
                <div class="infos_medico">
                    <img src="../../img/foto_medico.png">
                    <span>
                        <h4>Dra. Ana Costa</h4>
                        <p>Dermatologia</p>
                    </span>
                </div>
                <span class="infos_consulta"><i class="fa-regular fa-calendar"></i> 20 Set, 10:00</span>
                <buttton class="botao_cancelar_consulta">Cancelar</buttton>
            </div>
            <div class="consulta">
                <div class="infos_medico">
                    <img src="../../img/foto_medico.png">
                    <span>
                        <h4>Dr. Paulo Costa</h4>
                        <p>Dermatologia</p>
                    </span>
                </div>
                <span class="infos_consulta"><i class="fa-regular fa-calendar"></i> 05 Out, 09:25</span>
                <buttton class="botao_cancelar_consulta">Cancelar</buttton>
            </div>
            <div class="consulta">
                <div class="infos_medico">
                    <img src="../../img/foto_medico.png">
                    <span>
                        <h4>Dr. João T.</h4>
                        <p>Dermatologia</p>
                    </span>
                </div>
                <span class="infos_consulta"><i class="fa-regular fa-calendar"></i> 15 Out, 14:30</span>
                <buttton class="botao_cancelar_consulta">Cancelar</buttton>
            </div>
        </section>


        </div>
    </main>`,
    historico_cons: `  <!-- BARRA LATERAL -->
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('inicio')" href="#"><i class="fa-solid fa-house"></i> Início</button>
        </li>
        <li>
          <button onclick="trocarPagina('consultas_marc')" href="painel_paciente2.html"><i
              class="fa-regular fa-calendar-check"></i> Consultas
            Marcadas</button>
        </li>
        <li class="ativo">
          <button href="#"><i class="fa-regular fa-clock"></i> Histórico de
            Consultas</button>
        </li>
        <li>
          <button onclick="trocarPagina('buscar_med')" href="#"><i class="fa-solid fa-magnifying-glass"></i> Buscar
            Médicos</button>
        </li>
        <li>
          <button onclick="trocarPagina('perfil')" href="#"><i class="fa-regular fa-user"></i> Perfil</button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()" href="pagina_inicial.html"><i class="fa-solid fa-arrow-right-from-bracket"></i>
            Sair</button>
        </li>
      </ul>
    </nav>
  </aside>

  <!-- CONTEÚDO PRINCIPAL -->
  <main>
    <header>
      <div>
        <h1>Olá, Miguel!</h1>
        <p>Esse é seu histórico de consultas</p>
      </div>

      <div class="perfil_usuario">
        <span class="avatar">M</span>
        <div>
          <strong>Miguel Silva</strong>
          <small>Paciente</small>
        </div>
      </div>
    </header>

    <section class="historico_consultas">
            <h2>Histórico de Consultas</h2>
            <div class="consulta">
    <div class="infos_medico">
        <img src="../../img/foto_medico.png" alt="Foto da médica">
        <span>
            <h4>Dra. Ana Costa</h4>
            <p>Dermatologia</p>
        </span>
    </div>
    <span class="infos_consulta">
        <i class="fa-regular fa-calendar"></i> 03 Abr 2026
    </span>
</div>

<div class="consulta">
    <div class="infos_medico">
        <img src="../../img/foto_medico.png" alt="Foto do médico">
        <span>
            <h4>Dr. Paulo Santos</h4>
            <p>Ortopedia</p>
        </span>
    </div>
    <span class="infos_consulta">
        <i class="fa-regular fa-calendar"></i> 07 Dez 2025
    </span>
</div>

<div class="consulta">
    <div class="infos_medico">
        <img src="../../img/foto_medico.png" alt="Foto do médico">
        <span>
            <h4>Dr. João T.</h4>
            <p>Oftalmologia</p>
        </span>
    </div>
    <span class="infos_consulta">
        <i class="fa-regular fa-calendar"></i> 15 Out 2025
    </span>
</div>

<div class="consulta">
    <div class="infos_medico">
        <img src="../../img/foto_medico.png" alt="Foto da médica">
        <span>
            <h4>Dra. Rafaela</h4>
            <p>Pediatria</p>
        </span>
    </div>
    <span class="infos_consulta">
        <i class="fa-regular fa-calendar"></i> 09 Jul 2025
    </span>
</div>

<div class="consulta">
    <div class="infos_medico">
        <img src="../../img/foto_medico.png" alt="Foto da médica">
        <span>
            <h4>Dra. Maria C.</h4>
            <p>Neurologia</p>
        </span>
    </div>
    <span class="infos_consulta">
        <i class="fa-regular fa-calendar"></i> 03 Mai 2025
    </span>
</div>
        </section>


  </main>

  <script src="../../scripts/paineis.js"></script>`
}

function trocarPagina(destino) {
    if (destino === "inicio") {
        document.querySelector("body").innerHTML = codigos_html.inicio;
    }
    else if (destino === "consultas_marc") {
        document.querySelector("body").innerHTML = codigos_html.consultas_marc;
    }
    else if (destino === "historico_cons") {
        document.querySelector("body").innerHTML = codigos_html.historico_cons;
    }

}