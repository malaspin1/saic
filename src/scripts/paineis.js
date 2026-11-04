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

  <script src="../../scripts/paineis.js"></script>`,
  busca_medico: `
    <aside class="barra_lateral">
      <h1>saic</h1>
      <nav>
        <ul>
          <li>
            <button onclick="trocarPagina('inicio')" href="#">
              <i class="fa-solid fa-house"></i> Início
            </button>
          </li>
          <li>
            <button
              onclick="trocarPagina('consultas_marc')"
              href="painel_paciente2.html"
            >
              <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
            </button>
          </li>
          <li>
            <button href="#">
              <i class="fa-regular fa-clock"></i> Histórico de Consultas
            </button>
          </li>
          <li class="ativo">
            <button onclick="trocarPagina('buscar_med')" href="#">
              <i class="fa-solid fa-magnifying-glass"></i> Buscar Médicos
            </button>
          </li>
          <li>
            <button onclick="trocarPagina('perfil')" href="#">
              <i class="fa-regular fa-user"></i> Perfil
            </button>
          </li>
          <li class="divisor"></li>
          <li>
            <button onclick="sair()" href="pagina_inicial.html">
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    <main>
      <header>
        <div>
          <h1>Olá, Miguel!</h1>
          <p>Busque Médicos para agendar consultas</p>
        </div>

        <div class="perfil_usuario">
          <span class="avatar">M</span>
          <div>
            <strong>Miguel Silva</strong>
            <small>Paciente</small>
          </div>
        </div>
      </header>

      <section class="busca_medico">
        <div class="area_busca">
          <h3>Buscar</h3>
          <div class="input_busca">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              class="bucar_medico_input"
              type="text"
              placeholder="Buscar médico..."
            />
          </div>
          <i id="filtro" class="filtro fa-solid fa-sort-down"></i>

          <div id="filtros">
            <h3>Especialidades</h3>
            <div class="input_filtros">
              <i class="fa-solid fa-magnifying-glass"></i
              ><input
                class="buscar_especialidades_input busca_filtros"
                type="text"
                placeholder="Buscar especialidade..."
              />
            </div>
            <div class="inputs_checkbox">
              <div class="checkbox">
                <input type="checkbox" id="cardiologia" /><label
                  for="cardiologia"
                  >Cardiologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="pediatria" /><label for="pediatria"
                  >Pediatria</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="ginecologia" /><label
                  for="ginecologia"
                  >Ginecologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="dermatologia" /><label
                  for="dermatologia"
                  >Dermatologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="ortopedia" /><label for="ortopedia"
                  >Ortopedia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="neurologia" /><label for="neurologia"
                  >Neurologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="oftalmologia" /><label
                  for="oftalmologia"
                  >Oftalmologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="psiquiatria" /><label
                  for="psiquiatria"
                  >Psiquiatria</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="urologia" /><label for="urologia"
                  >Urologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="endocrinologia" /><label
                  for="endocrinologia"
                  >Endocrinologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="gastroenterologia" /><label
                  for="gastroenterologia"
                  >Gastroenterologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="pneumologia" /><label
                  for="pneumologia"
                  >Pneumologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="otorrinolaringologia" /><label
                  for="otorrinolaringologia"
                  >Otorrinolaringologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="oncologia" /><label for="oncologia"
                  >Oncologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="infectologia" /><label
                  for="infectologia"
                  >Infectologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="nefrologia" /><label for="nefrologia"
                  >Nefrologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="reumatologia" /><label
                  for="reumatologia"
                  >Reumatologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="geriatria" /><label for="geriatria"
                  >Geriatria</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="medicina_familia" /><label
                  for="medicina_familia"
                  >Medicina de Família</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_geral" /><label
                  for="clinica_geral"
                  >Clínica Geral</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="cirurgia_geral" /><label
                  for="cirurgia_geral"
                  >Cirurgia Geral</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="nutrologia" /><label for="nutrologia"
                  >Nutrologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="nutricao" /><label for="nutricao"
                  >Nutrição</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="psicologia" /><label for="psicologia"
                  >Psicologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="fisioterapia" /><label
                  for="fisioterapia"
                  >Fisioterapia</label
                >
              </div>
            </div>
            <h3>Unidades</h3>
            <div class="input_filtros">
              <i class="fa-solid fa-magnifying-glass"></i
              ><input
                class="buscar_unidade_input busca_filtros"
                type="text"
                placeholder="Buscar unidade..."
              />
            </div>
            <div class="inputs_checkbox">
              <div class="checkbox">
                <input type="checkbox" id="hospital_sao_lucas" /><label
                  for="hospital_sao_lucas"
                  >Hospital São Lucas</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="hospital_santa_casa" /><label
                  for="hospital_santa_casa"
                  >Santa Casa</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="hospital_unimed" /><label
                  for="hospital_unimed"
                  >Hospital Unimed</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="hospital_sao_joaquim" /><label
                  for="hospital_sao_joaquim"
                  >Hospital São Joaquim</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_saude_total" /><label
                  for="clinica_saude_total"
                  >Clínica Saúde Total</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_bem_estar" /><label
                  for="clinica_bem_estar"
                  >Clínica Bem-Estar</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_medvida" /><label
                  for="clinica_medvida"
                  >Clínica MedVida</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_popular" /><label
                  for="clinica_popular"
                  >Clínica Popular</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="centro_medico" /><label
                  for="centro_medico"
                  >Centro Médico Integrado</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="centro_especialidades" /><label
                  for="centro_especialidades"
                /><label for="centro_especialidades"
                  >Centro de Especialidades Médicas</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="ubs_centro" /><label for="ubs_centro"
                  >UBS Central</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="ubs_norte" /><label for="ubs_norte"
                  >UBS Zona Norte</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="ubs_sul" /><label for="ubs_sul"
                  >UBS Zona Sul</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="upa_24h" /><label for="upa_24h"
                  >UPA 24 Horas</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="laboratorio_exames" /><label
                  for="laboratorio_exames"
                  >Laboratório de Análises Clínicas</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_imagem" /><label
                  for="clinica_imagem"
                  >Centro de Diagnóstico por Imagem</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_odonto" /><label
                  for="clinica_odonto"
                  >Clínica Odontológica</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_fisio" /><label
                  for="clinica_fisio"
                  >Clínica de Fisioterapia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_olhos" /><label
                  for="clinica_olhos"
                  >Clínica de Oftalmologia</label
                >
              </div>
              <div class="checkbox">
                <input type="checkbox" id="clinica_mulher" /><label
                  for="clinica_mulher"
                  >Centro de Saúde da Mulher</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="medicos">
          <div
            class="medico"
            data-unidades="clinica_saude_total,clinica_medvida,centro_especialidades"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Ana Costa</h4>
                <p>Dermatologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="hospital_sao_lucas,hospital_santa_casa,clinica_fisio"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. Paulo Santos</h4>
                <p>Ortopedia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="clinica_olhos,hospital_unimed,centro_medico"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. João Teixeira</h4>
                <p>Oftalmologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="clinica_medvida,clinica_popular,hospital_sao_joaquim"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Rafaela Martins</h4>
                <p>Dermatologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="hospital_sao_lucas,hospital_unimed,centro_medico"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. Lucas Oliveira</h4>
                <p>Cardiologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="hospital_santa_casa,ubs_centro,ubs_norte"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Mariana Almeida</h4>
                <p>Pediatria</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="hospital_sao_joaquim,centro_medico,hospital_unimed"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. Gabriel Ferreira</h4>
                <p>Neurologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="clinica_mulher,hospital_santa_casa,ubs_sul"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Beatriz Souza</h4>
                <p>Ginecologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="ubs_centro,ubs_norte,upa_24h,clinica_popular"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. Felipe Rodrigues</h4>
                <p>Clínica Geral</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="clinica_saude_total,clinica_medvida,centro_especialidades"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Camila Ribeiro</h4>
                <p>Endocrinologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="hospital_sao_lucas,hospital_unimed,centro_medico"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. Rafael Mendes</h4>
                <p>Urologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="clinica_bem_estar,clinica_saude_total,clinica_popular"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Juliana Carvalho</h4>
                <p>Nutrição Clínica</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="clinica_bem_estar,clinica_medvida,centro_medico"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. Marcelo Lima</h4>
                <p>Psiquiatria</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="clinica_olhos,clinica_imagem,hospital_santa_casa"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Isabela Gomes</h4>
                <p>Oftalmologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="hospital_unimed,centro_especialidades,hospital_sao_joaquim"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. Bruno Costa</h4>
                <p>Otorrinolaringologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="hospital_sao_lucas,centro_medico,hospital_santa_casa"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Larissa Fernandes</h4>
                <p>Reumatologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="hospital_unimed,hospital_sao_joaquim,centro_especialidades"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. André Martins</h4>
                <p>Gastroenterologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="clinica_bem_estar,clinica_medvida,clinica_saude_total"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Fernanda Lopes</h4>
                <p>Psicologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="clinica_olhos,hospital_unimed,centro_medico"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto do médico" />
              <span>
                <h4>Dr. Gustavo Barbosa</h4>
                <p>Oftalmologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>

          <div
            class="medico"
            data-unidades="hospital_santa_casa,hospital_sao_lucas,centro_medico"
          >
            <div class="infos_medico">
              <img src="../img/foto_medico.png" alt="Foto da médica" />
              <span>
                <h4>Dra. Patrícia Nunes</h4>
                <p>Cardiologia</p>
              </span>
            </div>
            <button class="agendar_button">Agendar Consulta</button>
          </div>
        </div>
      </section>
    </main>

    <script src="../scripts/paineis.js"></script>
    <script src="../scripts/busca_medico.js"></script>`,
};

function carregarScripts() {
  document.querySelectorAll("body script").forEach((scriptAntigo) => {
    const novoScript = document.createElement("script");

    novoScript.src = scriptAntigo.src;
    novoScript.type = scriptAntigo.type;

    document.body.appendChild(novoScript);
    scriptAntigo.remove();
  });
}

function trocarPagina(destino) {
  if (destino === "inicio") {
    document.body.innerHTML = codigos_html.inicio;
  } else if (destino === "consultas_marc") {
    document.body.innerHTML = codigos_html.consultas_marc;
  } else if (destino === "historico_cons") {
    document.body.innerHTML = codigos_html.historico_cons;
  } else if (destino === "buscar_med") {
    document.body.innerHTML = codigos_html.busca_medico;

    inicializarBuscaMedico();
  }
}
