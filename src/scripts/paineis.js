const codigos_html = {
  paciente: {
    inicio: `
    <aside class="barra_lateral">
      <h1>saic</h1>
      <nav>
        <ul>
          <li class="ativo">
            <button onclick="trocarPagina('paciente','inicio')"><i class="fa-solid fa-house"></i> Início</button>
          </li>
          <li>
            <button
              onclick="trocarPagina('paciente','consultas_marc')"
            >
              <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
            </button>
          </li>
          <li>
            <button onclick="trocarPagina('paciente','historico_cons')">
              <i class="fa-regular fa-clock"></i> Histórico de Consultas
            </button>
          </li>
          <li>
            <button onclick="trocarPagina('paciente','buscar_med')">
              <i class="fa-solid fa-magnifying-glass"></i> Buscar Médicos
            </button>
          </li>
          <li>
            <button onclick="trocarPagina('paciente','perfil')">
              <i class="fa-regular fa-user"></i> Perfil
            </button>
          </li>
          <li class="divisor"></li>
          <li>
            <button onclick="sair()">
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
          <p>Como podemos cuidar da sua saúde hoje?</p>
          <div class="acoes_header">
            <button onclick="trocarPagina('paciente','historico_cons')" class="botao botao_contorno">
              <i class="fa-regular fa-clock"></i> Ver Histórico Completo
            </button>
            <button onclick="trocarPagina('paciente','buscar_med')" class="botao botao_fundo">
              <i class="fa-solid fa-circle-plus"></i> Agendar Nova Consulta
            </button>
          </div>
        </div>

        <button type="button" onclick="trocarPagina('paciente','perfil')" class="perfil_usuario">
          <span class="avatar">M</span>
          <span class="perfil_texto">
            <strong>Miguel Silva</strong>
            <small>Paciente</small>
          </span>
        </button>
      </header>

      <div class="grid_painel">
        <div class="coluna_principal">
          <section class="cartao">
            <span class="etiqueta_verde">PRÓXIMA CONSULTA</span>

            <div class="info_pessoa">
              <div class="icone_avatar"><i class="fa-regular fa-user"></i></div>
              <div>
                <h2 class="nome">Dr. Ricardo Almeida</h2>
                <p class="especialidade"><span class="ponto_verde"></span> Cardiologia • CRM 12345</p>
              </div>
            </div>

            <div class="rodape_cartao">
              <div class="data_hora">
                <span class="data"
                  ><i class="fa-regular fa-calendar"></i> 15 de Setembro,
                  2026</span
                >
                <span class="hora"><i class="fa-regular fa-clock"></i> 14:30</span>
              </div>
              <button onclick="cancelarConsulta(this, 'cartao')" class="botao_cancelar">Cancelar</button>
            </div>
          </section>

          <section>
            <div class="titulo_seccao">
              <h2>Consultas Marcadas</h2>
              <button onclick="trocarPagina('paciente','consultas_marc')" class="link_button">Ver todas</button>
            </div>

            <div class="lista_consultas">
              <div class="cartao item_consulta">
                <div class="info_pessoa">
                  <div class="icone_avatar sm">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div>
                    <h3 class="nome">Dra. Ana Costa</h3>
                    <p class="especialidade">Dermatologia</p>
                  </div>
                </div>
                <span class="data"
                  ><i class="fa-regular fa-calendar"></i> 20 Set, 10:00</span
                >
                <button onclick="cancelarConsulta(this, 'lista')" class="botao_cancelar">Cancelar</button>
              </div>

              <div class="cartao item_consulta">
                <div class="info_pessoa">
                  <div class="icone_avatar sm">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div>
                    <h3 class="nome">Dr. Paulo Santos</h3>
                    <p class="especialidade">Ortopedia</p>
                  </div>
                </div>
                <span class="data"
                  ><i class="fa-regular fa-calendar"></i> 05 Out, 09:25</span
                >
                <button onclick="cancelarConsulta(this, 'lista')" class="botao_cancelar">Cancelar</button>
              </div>

              <div class="cartao item_consulta">
                <div class="info_pessoa">
                  <div class="icone_avatar sm">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div>
                    <h3 class="nome">Dr. João T.</h3>
                    <p class="especialidade">Oftalmologista</p>
                  </div>
                </div>
                <span class="data"
                  ><i class="fa-regular fa-calendar"></i> 15 Out, 14:30</span
                >
                <button onclick="cancelarConsulta(this, 'lista')" class="botao_cancelar">Cancelar</button>
              </div>
            </div>
          </section>
        </div>

        <aside>
          <section class="cartao cartao_historico">
            <div class="titulo">
              <i class="fa-regular fa-clock"></i>
              <h3>Histórico de Consultas</h3>
            </div>
            <span class="numero">08</span>
            <p>Consultas realizadas nos últimos 6 meses</p>
            <button onclick="trocarPagina('paciente','historico_cons')" class="botao_detalhes">Ver detalhes</button>
          </section>
        </aside>
      </div>
    </main>`,
    consultas_marc: `

    <aside class="barra_lateral">
        <h1>saic</h1>
        <nav>
            <ul>
                <li>
                    <button onclick="trocarPagina('paciente','inicio')"><i class="fa-solid fa-house"></i> Início</button>
                </li>
                <li  class="ativo">
                    <button><i
                            class="fa-regular fa-calendar-check"></i> Consultas
                        Marcadas</button>
                </li>
                <li>
                    <button onclick="trocarPagina('paciente','historico_cons')"><i class="fa-regular fa-clock"></i>
                        Histórico de
                        Consultas</button>
                </li>
                <li>
                    <button onclick="trocarPagina('paciente','buscar_med')"><i class="fa-solid fa-magnifying-glass"></i>
                        Buscar
                        Médicos</button>
                </li>
                <li>
                    <button onclick="trocarPagina('paciente','perfil')"><i class="fa-regular fa-user"></i> Perfil</button>
                </li>
                <li class="divisor"></li>
                <li>
                    <button onclick="sair()"><i
                            class="fa-solid fa-arrow-right-from-bracket"></i>
                        Sair</button>
                </li>
            </ul>
        </nav>
    </aside>

    <main>
        <header>
            <div>
                <h1>Olá, Miguel!</h1>
                <p>Essas são suas consultas marcadas!</p>
            </div>

            <button type="button" onclick="trocarPagina('paciente','perfil')" class="perfil_usuario">
                <span class="avatar">M</span>
                <span class="perfil_texto">
                    <strong>Miguel Silva</strong>
                    <small>Paciente</small>
                </span>
            </button>
        </header>

        <section class="consultas_marcadas">
            <h2>Consultas Marcadas</h2>
            <div class="consulta">
                <div class="infos_medico">
                    <img src="../img/foto_medico.png">
                    <span>
                        <h4 class="nome">Dra. Ana Costa</h4>
                        <p class="especialidade">Dermatologia</p>
                    </span>
                </div>
                <span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 20 Set, 10:00</span>
                <button onclick="cancelarConsulta(this, 'lista')" class="botao_cancelar_consulta">Cancelar</button>
            </div>
            <div class="consulta">
                <div class="infos_medico">
                    <img src="../img/foto_medico.png">
                    <span>
                        <h4 class="nome">Dr. Paulo Costa</h4>
                        <p class="especialidade">Dermatologia</p>
                    </span>
                </div>
                <span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 05 Out, 09:25</span>
                <button onclick="cancelarConsulta(this, 'lista')" class="botao_cancelar_consulta">Cancelar</button>
            </div>
            <div class="consulta">
                <div class="infos_medico">
                    <img src="../img/foto_medico.png">
                    <span>
                        <h4 class="nome">Dr. João T.</h4>
                        <p class="especialidade">Dermatologia</p>
                    </span>
                </div>
                <span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 15 Out, 14:30</span>
                <button onclick="cancelarConsulta(this, 'lista')" class="botao_cancelar_consulta">Cancelar</button>
            </div>
        </section>
    </main>`,
    historico_cons: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('paciente','inicio')"><i class="fa-solid fa-house"></i> Início</button>
        </li>
        <li>
          <button onclick="trocarPagina('paciente','consultas_marc')"><i
              class="fa-regular fa-calendar-check"></i> Consultas
            Marcadas</button>
        </li>
        <li class="ativo">
          <button><i class="fa-regular fa-clock"></i> Histórico de
            Consultas</button>
        </li>
        <li>
          <button onclick="trocarPagina('paciente','buscar_med')"><i class="fa-solid fa-magnifying-glass"></i> Buscar
            Médicos</button>
        </li>
        <li>
          <button onclick="trocarPagina('paciente','perfil')"><i class="fa-regular fa-user"></i> Perfil</button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()"><i class="fa-solid fa-arrow-right-from-bracket"></i>
            Sair</button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, Miguel!</h1>
        <p>Esse é seu histórico de consultas</p>
      </div>

      <button type="button" onclick="trocarPagina('paciente','perfil')" class="perfil_usuario">
        <span class="avatar">M</span>
        <span class="perfil_texto">
          <strong>Miguel Silva</strong>
          <small>Paciente</small>
        </span>
      </button>
    </header>

    <section class="historico_consultas">
            <h2>Histórico de Consultas</h2>
            <div class="consulta">
    <div class="infos_medico">
        <img src="../img/foto_medico.png" alt="Foto da médica">
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
        <img src="../img/foto_medico.png" alt="Foto do médico">
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
        <img src="../img/foto_medico.png" alt="Foto do médico">
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
        <img src="../img/foto_medico.png" alt="Foto da médica">
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
        <img src="../img/foto_medico.png" alt="Foto da médica">
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


  </main>`,
    busca_medico: `
    <aside class="barra_lateral">
      <h1>saic</h1>
      <nav>
        <ul>
          <li>
            <button onclick="trocarPagina('paciente','inicio')">
              <i class="fa-solid fa-house"></i> Início
            </button>
          </li>
          <li>
            <button
              onclick="trocarPagina('paciente','consultas_marc')"
            >
              <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
            </button>
          </li>
          <li>
            <button onclick="trocarPagina('paciente','historico_cons')">
              <i class="fa-regular fa-clock"></i> Histórico de Consultas
            </button>
          </li>
          <li class="ativo">
            <button onclick="trocarPagina('paciente','buscar_med')">
              <i class="fa-solid fa-magnifying-glass"></i> Buscar Médicos
            </button>
          </li>
          <li>
            <button onclick="trocarPagina('paciente','perfil')">
              <i class="fa-regular fa-user"></i> Perfil
            </button>
          </li>
          <li class="divisor"></li>
          <li>
            <button onclick="sair()">
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

        <button type="button" onclick="trocarPagina('paciente','perfil')" class="perfil_usuario">
          <span class="avatar">M</span>
          <span class="perfil_texto">
            <strong>Miguel Silva</strong>
            <small>Paciente</small>
          </span>
        </button>
      </header>

      <section class="busca_medico">
        <div class="area_busca">
          <h3>Buscar</h3>
          <div class="input_busca">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              class="buscar_medico_input"
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
    </main>`,
    perfil: `    <aside class="barra_lateral">
        <h1>saic</h1>
        <nav>
            <ul>
                <li>
                    <button onclick="trocarPagina('paciente','inicio')"><i class="fa-solid fa-house"></i> Início</button>
                </li>
                <li>
                    <button onclick="trocarPagina('paciente','consultas_marc')">
                        <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
                    </button>
                </li>
                <li>
                    <button onclick="trocarPagina('paciente','historico_cons')">
                        <i class="fa-regular fa-clock"></i> Histórico de Consultas
                    </button>
                </li>
                <li>
                    <button onclick="trocarPagina('paciente','buscar_med')">
                        <i class="fa-solid fa-magnifying-glass"></i> Buscar Médicos
                    </button>
                </li>
                <li class="ativo">
                    <button onclick="trocarPagina('paciente','perfil')">
                        <i class="fa-regular fa-user"></i> Perfil
                    </button>
                </li>
                <li class="divisor"></li>
                <li>
                    <button onclick="sair()">
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
                <p>Esse é o seu perfil, você pode alterar informações aqui.</p>
            </div>
        </header>

        <section class="cartao">
            <form>
                <div class="perfil_formulario">
                    <section class="informacoes_principais">
                        <h2 id="informacoes_principais">Informações Principais</h2>

                        <div class="input_nome_avatar">
                            
                            <div class="input_nome">
                                <label for="input_nome" class="input_label">Nome:</label>
                                <input minlength="5" maxlength="100" class="input-texto" type="text" name="nome"
                                id="input_nome" placeholder="Insira seu nome completo aqui" required
                                value="Miguel Silva">
                            </div>
                            
                            <div class="avatar_perfil">
                                <span class="icone_avatar_perfil">M</span>
                            </div>
                        </div>

                        <div>
                            <label for="input_datanasc" class="input_label">Data de Nascimento:</label>
                            <input class="input-texto" type="date" name="datanasc" id="input_datanasc" required>
                        </div>
                    </section>

                    <section class="informacoes_contato">
                        <h2 id="informacoes_contato">Informações de Contato</h2>

                        <div>
                            <label for="input_email" class="input_label">Email:</label>
                            <input minlength="5" maxlength="150" class="input-texto" type="email" name="email"
                                id="input_email" placeholder="Insira seu email aqui" required
                                value="miguelsilva@email.com">
                        </div>

                        <div>
                            <label for="input_telefone" class="input_label">Telefone:</label>
                            <input minlength="11" maxlength="11" class="input-texto" type="tel" name="telefone"
                                id="input_telefone" placeholder="Insira seu telefone aqui" required
                                value="1699873208235">
                        </div>
                    </section>
                </div>

                <button type="button" class="salvar_alt_button">
                    Salvar Alterações
                </button>
            </form>
        </section>
    </main>`
  },
  especialista: {
    inicio: `
    <aside class="barra_lateral">
      <h1>saic</h1>
      <nav>
        <ul>
          <li class="ativo">
            <button onclick="trocarPagina('especialista','inicio')"><i class="fa-solid fa-house"></i> Início</button>
          </li>
          <li>
            <button
              onclick="trocarPagina('especialista','consultas_marc')"
            >
              <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
            </button>
          </li>
          <li>
            <button onclick="trocarPagina('especialista','historico_cons')">
              <i class="fa-regular fa-clock"></i> Histórico de Consultas
            </button>
          </li>
          <li>
            <button onclick="trocarPagina('especialista','unidades')">
              <i class="fa-solid fa-hospital"></i> Unidades
            </button>
          </li>
          <li>
            <button onclick="trocarPagina('especialista','perfil')">
              <i class="fa-regular fa-user"></i> Perfil
            </button>
          </li>
          <li class="divisor"></li>
          <li>
            <button onclick="sair()">
              <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
            </button>
          </li>
        </ul>
      </nav>
    </aside>

    <main>
      <header>
        <div>
          <h1>Olá, João!</h1>
          <p>Aqui está sua agenda!</p>
          <div class="acoes_header">
            <button onclick="trocarPagina('especialista','historico_cons')" class="botao botao_contorno">
              <i class="fa-regular fa-clock"></i> Ver Histórico Completo
            </button>
          </div>
        </div>

        <button type="button" onclick="trocarPagina('especialista','perfil')" class="perfil_usuario">
          <span class="avatar">JT</span>
          <span class="perfil_texto">
            <strong>Dr. João T.</strong>
            <small>Médico</small>
          </span>
        </button>
      </header>

      <div class="grid_painel">
        <div class="coluna_principal">
          <section class="cartao">
            <span class="etiqueta_verde">PRÓXIMA CONSULTA</span>

            <div class="info_pessoa">
              <div class="icone_avatar"><i class="fa-regular fa-user"></i></div>
              <div>
                <h2 class="nome">Miguel Silva</h2>
                <p class="especialidade"><span class="ponto_verde"></span> Consulta • Clínica Geral</p>
              </div>
            </div>

            <div class="rodape_cartao">
              <div class="data_hora">
                <span class="data"
                  ><i class="fa-regular fa-calendar"></i> 15 de Setembro,
                  2026</span
                >
                <span class="hora"><i class="fa-regular fa-clock"></i> 14:30</span>
              </div>
            </div>
          </section>

          <section>
            <div class="titulo_seccao">
              <h2>Consultas Marcadas</h2>
              <button onclick="trocarPagina('especialista','consultas_marc')" class="link_button">Ver todas</button>
            </div>

            <div class="lista_consultas">
              <div class="cartao item_consulta">
                <div class="info_pessoa">
                  <div class="icone_avatar sm">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div>
                    <h3 class="nome">Vitor Malaspini</h3>
                    <p class="especialidade">Oftalmo</p>
                  </div>
                </div>
                <span class="data"
                  ><i class="fa-regular fa-calendar"></i> 20 Set, 18:00</span
                >
              </div>

              <div class="cartao item_consulta">
                <div class="info_pessoa">
                  <div class="icone_avatar sm">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div>
                    <h3 class="nome">Gustavo Pimenta</h3>
                    <p class="especialidade">Clínica Geral</p>
                  </div>
                </div>
                <span class="data"
                  ><i class="fa-regular fa-calendar"></i> 14 Out, 09:40</span
                >
              </div>

              <div class="cartao item_consulta">
                <div class="info_pessoa">
                  <div class="icone_avatar sm">
                    <i class="fa-regular fa-user"></i>
                  </div>
                  <div>
                    <h3 class="nome">Otávio Sá</h3>
                    <p class="especialidade">Clínica Geral</p>
                  </div>
                </div>
                <span class="data"
                  ><i class="fa-regular fa-calendar"></i> 19 Out, 12:30</span
                >
              </div>
            </div>
          </section>
        </div>

        <aside>
          <section class="cartao cartao_historico">
            <div class="titulo">
              <i class="fa-regular fa-clock"></i>
              <h3>Histórico de Consultas</h3>
            </div>
            <span class="numero">37</span>
            <p>Consultas realizadas nos últimos 6 meses</p>
            <button onclick="trocarPagina('especialista','historico_cons')" class="botao_detalhes">Ver detalhes</button>
          </section>
        </aside>
      </div>
    </main>`,
    consultas_marc: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('especialista','inicio')"><i class="fa-solid fa-house"></i> Início</button>
        </li>
        <li class="ativo">
          <button onclick="trocarPagina('especialista','consultas_marc')">
            <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','historico_cons')">
            <i class="fa-regular fa-clock"></i> Histórico de Consultas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','unidades')">
            <i class="fa-solid fa-hospital"></i> Unidades
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','perfil')">
            <i class="fa-regular fa-user"></i> Perfil
          </button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, João!</h1>
        <p>Aqui está sua agenda!</p>
      </div>

      <button type="button" onclick="trocarPagina('especialista','perfil')" class="perfil_usuario">
        <span class="avatar">JT</span>
        <span class="perfil_texto">
          <strong>Dr. João T.</strong>
          <small>Médico</small>
        </span>
      </button>
    </header>

    <section class="consultas_marcadas">
      <h2>Consultas Marcadas</h2>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png">
          <span>
            <h4 class="nome">Miguel Silva</h4>
            <p class="especialidade">Clínica Geral</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 20 Set, 10:00</span></div>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png">
          <span>
            <h4 class="nome">Vitor Malaspini</h4>
            <p class="especialidade">Oftalmo</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 05 Out, 09:25</span></div>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png">
          <span>
            <h4 class="nome">Gustavo Pimenta</h4>
            <p class="especialidade">Clínica Geral</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 15 Out, 14:30</span></div>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png">
          <span>
            <h4 class="nome">Otávio Sá</h4>
            <p class="especialidade">Clínica Geral</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 15 Out, 14:30</span></div>
      </div>
    </section>
  </main>`,
    historico_cons: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('especialista','inicio')"><i class="fa-solid fa-house"></i> Início</button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','consultas_marc')">
            <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
          </button>
        </li>
        <li class="ativo">
          <button onclick="trocarPagina('especialista','historico_cons')">
            <i class="fa-regular fa-clock"></i> Histórico de Consultas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','unidades')">
            <i class="fa-solid fa-hospital"></i> Unidades
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','perfil')">
            <i class="fa-regular fa-user"></i> Perfil
          </button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, João!</h1>
        <p>Aqui está sua agenda!</p>
        <div class="acoes_header">
        </div>
      </div>

      <button type="button" onclick="trocarPagina('especialista','perfil')" class="perfil_usuario">
        <span class="avatar">JT</span>
        <span class="perfil_texto">
          <strong>Dr. João T.</strong>
          <small>Médico</small>
        </span>
      </button>
    </header>

    <section class="historico_consultas">
      <h2>Histórico de Consultas</h2>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do médico">
          <span>
            <h4>Roberto</h4>
            <p>Clínica Geral</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 02 Out 2026
        </span>
      </div>

      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do médico">
          <span>
            <h4>Camila</h4>
            <p>Oftalmologia</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 18 Set 2026
        </span>
      </div>

      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do médico">
          <span>
            <h4>Fernando</h4>
            <p>Clínica Geral</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 25 Set 2026
        </span>
      </div>

      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do médico">
          <span>
            <h4>Juliana</h4>
            <p>Oftalmologia</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 11 Ago 2026
        </span>
      </div>

      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do médico">
          <span>
            <h4>Ricardo</h4>
            <p>Clínica Geral</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 30 Set 2026
        </span>
      </div>

      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do médico">
          <span>
            <h4>Patrícia</h4>
            <p>Oftalmologia</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 07 Out 2026
        </span>
      </div>

      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do médico">
          <span>
            <h4>Eduardo</h4>
            <p>Clínica Geral</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 14 Jul 2026
        </span>
      </div>

      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do médico">
          <span>
            <h4>Beatriz</h4>
            <p>Oftalmologia</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 21 Ago 2026
        </span>
      </div>

      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do médico">
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
          <img src="../img/foto_medico.png" alt="Foto da médica">
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
          <img src="../img/foto_medico.png" alt="Foto da médica">
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


  </main>`,
    unidades: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('especialista','inicio')"><i class="fa-solid fa-house"></i> Início</button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','consultas_marc')">
            <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','historico_cons')">
            <i class="fa-regular fa-clock"></i> Histórico de Consultas
          </button>
        </li>
        <li class="ativo">
          <button onclick="trocarPagina('especialista','unidades')">
            <i class="fa-solid fa-hospital"></i> Unidades
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','perfil')">
            <i class="fa-regular fa-user"></i> Perfil
          </button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, João!</h1>
        <p>Aqui está sua agenda!</p>
        <div class="acoes_header">
        </div>
      </div>

      <button type="button" onclick="trocarPagina('especialista','perfil')" class="perfil_usuario">
        <span class="avatar">JT</span>
        <span class="perfil_texto">
          <strong>Dr. João T.</strong>
          <small>Médico</small>
        </span>
      </button>
    </header>
    <section class="busca_unidade">
      <div class="area_busca">
        <h3>Buscar</h3>
        <div class="input_busca">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input class="buscar_unidade_input" type="text" placeholder="Buscar unidade..." />
        </div>
        <div class="unidades">
          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital Santa Aurora</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital São Lucas</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital Vida Plena</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital São Rafael</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital Santa Clara</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital São Gabriel</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital Bom Jesus</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital São Miguel</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital Santa Maria</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

          <div class="unidade">
            <div class="infos_unidade">
              <img src="../img/foto_unidade.png" alt="Foto da unidade" />
              <span>
                <h4>Hospital Nossa Senhora das Graças</h4>
              </span>
            </div>
            <button class="botao_solicitar_entrada">Solicitar Entrada</button>
          </div>

        </div>
        <p class="sem_resultados">Nenhuma unidade encontrada.</p>
      </div>
    </section>
  </main>`,
    perfil: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('especialista','inicio')"><i class="fa-solid fa-house"></i> Início</button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','consultas_marc')">
            <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','historico_cons')">
            <i class="fa-regular fa-clock"></i> Histórico de Consultas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('especialista','unidades')">
            <i class="fa-solid fa-hospital"></i> Unidades
          </button>
        </li>
        <li class="ativo">
          <button onclick="trocarPagina('especialista','perfil')">
            <i class="fa-regular fa-user"></i> Perfil
          </button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, João!</h1>
        <p>Aqui está sua agenda!</p>
        <div class="acoes_header">
        </div>
      </div>

      <button type="button" onclick="trocarPagina('especialista','perfil')" class="perfil_usuario">
        <span class="avatar">JT</span>
        <span class="perfil_texto">
          <strong>Dr. João T.</strong>
          <small>Médico</small>
        </span>
      </button>
    </header>
    <section class="cartao">
      <form>
        <div class="perfil_formulario">
          <section class="informacoes_principais">
            <h2 id="informacoes_principais">Informações Principais</h2>

            <div class="input_nome_avatar">

              <div class="input_nome">
                <label for="input_nome" class="input_label">Nome:</label>
                <input minlength="5" maxlength="100" class="input-texto" type="text" name="nome" id="input_nome"
                  placeholder="Insira seu nome completo aqui" required value="João T. da Silva">
              </div>

              <div class="avatar_perfil">
                <span class="icone_avatar_perfil">JT</span>
              </div>
            </div>

            <div>
              <label for="input_datanasc" class="input_label">Data de Nascimento:</label>
              <input class="input-texto" type="date" name="datanasc" id="input_datanasc" value="1990-11-20" required>
            </div>
          </section>

          <section class="informacoes_contato">
            <h2 id="informacoes_contato">Informações de Contato</h2>

            <div>
              <label for="input_email" class="input_label">Email:</label>
              <input minlength="5" maxlength="150" class="input-texto" type="email" name="email" id="input_email"
                placeholder="Insira seu email aqui" required value="joaotdasilva@email.com">
            </div>

            <div>
              <label for="input_telefone" class="input_label">Telefone:</label>
              <input minlength="11" maxlength="11" class="input-texto" type="tel" name="telefone" id="input_telefone"
                placeholder="Insira seu telefone aqui" required value="169987323000">
            </div>
          </section>
        </div>

        <button type="button" class="salvar_alt_button">
          Salvar Alterações
        </button>
      </form>
    </section>
  </main>`

  },
  unidade: {
    inicio: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li class="ativo">
          <button onclick="trocarPagina('unidade','inicio')">
            <i class="fa-solid fa-house"></i> Início
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','consultas_marc')">
            <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','historico_cons')">
            <i class="fa-regular fa-clock"></i> Histórico de Consultas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','medicos')">
            <i class="fa-solid fa-user-doctor"></i> Médicos
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','perfil')">
            <i class="fa-regular fa-building"></i> Perfil
          </button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, Hospital Santa Aurora!</h1>
        <p>Aqui está a agenda da sua unidade!</p>
        <div class="acoes_header">
        <button onclick="trocarPagina('unidade','historico_cons')" class="botao botao_contorno">
          <i class="fa-regular fa-clock"></i> Ver Histórico Completo
        </button>
        <button onclick="trocarPagina('unidade','medicos')" class="botao botao_fundo">
          <i class="fa-solid fa-user-doctor"></i> Gerenciar Médicos
        </button>
        </div>
      </div>

      <button type="button" onclick="trocarPagina('unidade','perfil')" class="perfil_usuario">
        <span class="avatar">SA</span>
        <span class="perfil_texto">
          <strong>Hospital Santa Aurora</strong>
          <small>Unidade</small>
        </span>
      </button>
    </header>

    <div class="grid_painel">
      <div class="coluna_principal">
        <section class="cartao">
          <span class="etiqueta_verde">PRÓXIMA CONSULTA</span>

          <div class="info_pessoa">
            <div class="icone_avatar"><i class="fa-regular fa-user"></i></div>
            <div>
              <h2 class="nome">Miguel Silva</h2>
              <p class="especialidade"><span class="ponto_verde"></span> Oftalmologia • Dr. João T.</p>
            </div>
          </div>

          <div class="rodape_cartao">
            <div class="data_hora">
              <span class="data"><i class="fa-regular fa-calendar"></i> 15 de Setembro, 2026</span>
              <span class="hora"><i class="fa-regular fa-clock"></i> 14:30</span>
            </div>
          </div>
        </section>

        <section>
          <div class="titulo_seccao">
            <h2>Consultas Marcadas</h2>
            <button onclick="trocarPagina('unidade','consultas_marc')" class="link_button">Ver todas</button>
          </div>

          <div class="lista_consultas">
          <div class="cartao item_consulta">
            <div class="info_pessoa">
              <div class="icone_avatar sm">
                <i class="fa-regular fa-user"></i>
              </div>
              <div>
                <h3 class="nome">Vitor Malaspini</h3>
                <p class="especialidade">Oftalmologia • Dra. Isabela Gomes</p>
              </div>
            </div>
            <span class="data"><i class="fa-regular fa-calendar"></i> 20 Set, 18:00</span>
          </div>
          <div class="cartao item_consulta">
            <div class="info_pessoa">
              <div class="icone_avatar sm">
                <i class="fa-regular fa-user"></i>
              </div>
              <div>
                <h3 class="nome">Gustavo Pimenta</h3>
                <p class="especialidade">Clínica Geral • Dr. Felipe Rodrigues</p>
              </div>
            </div>
            <span class="data"><i class="fa-regular fa-calendar"></i> 14 Out, 09:40</span>
          </div>
          <div class="cartao item_consulta">
            <div class="info_pessoa">
              <div class="icone_avatar sm">
                <i class="fa-regular fa-user"></i>
              </div>
              <div>
                <h3 class="nome">Otávio Sá</h3>
                <p class="especialidade">Cardiologia • Dr. Lucas Oliveira</p>
              </div>
            </div>
            <span class="data"><i class="fa-regular fa-calendar"></i> 19 Out, 12:30</span>
          </div>
          </div>
        </section>
      </div>

      <aside>
        <section class="cartao cartao_historico">
          <div class="titulo">
            <i class="fa-regular fa-clock"></i>
            <h3>Histórico de Consultas</h3>
          </div>
          <span class="numero">146</span>
          <p>Consultas realizadas nos últimos 6 meses</p>
          <button onclick="trocarPagina('unidade','historico_cons')" class="botao_detalhes">Ver detalhes</button>
        </section>

        <section class="cartao cartao_historico">
          <div class="titulo">
            <i class="fa-solid fa-user-doctor"></i>
            <h3>Médicos da Unidade</h3>
          </div>
          <span class="numero">06</span>
          <p>Médicos atuando na unidade e 3 solicitações de entrada pendentes</p>
          <button onclick="trocarPagina('unidade','medicos')" class="botao_detalhes">Gerenciar médicos</button>
        </section>
      </aside>
    </div>
  </main>`,
    consultas_marc: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('unidade','inicio')">
            <i class="fa-solid fa-house"></i> Início
          </button>
        </li>
        <li class="ativo">
          <button onclick="trocarPagina('unidade','consultas_marc')">
            <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','historico_cons')">
            <i class="fa-regular fa-clock"></i> Histórico de Consultas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','medicos')">
            <i class="fa-solid fa-user-doctor"></i> Médicos
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','perfil')">
            <i class="fa-regular fa-building"></i> Perfil
          </button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, Hospital Santa Aurora!</h1>
        <p>Essas são as consultas marcadas na sua unidade!</p>
        <div class="acoes_header">
        </div>
      </div>

      <button type="button" onclick="trocarPagina('unidade','perfil')" class="perfil_usuario">
        <span class="avatar">SA</span>
        <span class="perfil_texto">
          <strong>Hospital Santa Aurora</strong>
          <small>Unidade</small>
        </span>
      </button>
    </header>

    <section class="consultas_marcadas">
      <h2>Consultas Marcadas</h2>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4 class="nome">Miguel Silva</h4>
            <p class="especialidade">Oftalmologia • Dr. João T.</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 15 Set, 14:30</span></div>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4 class="nome">Vitor Malaspini</h4>
            <p class="especialidade">Oftalmologia • Dra. Isabela Gomes</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 20 Set, 18:00</span></div>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4 class="nome">Gustavo Pimenta</h4>
            <p class="especialidade">Clínica Geral • Dr. Felipe Rodrigues</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 14 Out, 09:40</span></div>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4 class="nome">Otávio Sá</h4>
            <p class="especialidade">Cardiologia • Dr. Lucas Oliveira</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 19 Out, 12:30</span></div>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4 class="nome">Larissa Souza</h4>
            <p class="especialidade">Pediatria • Dra. Mariana Almeida</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 22 Out, 08:15</span></div>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4 class="nome">Rafael Lima</h4>
            <p class="especialidade">Dermatologia • Dra. Ana Costa</p>
          </span>
        </div>
        <div><span class="infos_consulta data"><i class="fa-regular fa-calendar"></i> 28 Out, 16:00</span></div>
      </div>
    </section>
  </main>`,
    historico_cons: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('unidade','inicio')">
            <i class="fa-solid fa-house"></i> Início
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','consultas_marc')">
            <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
          </button>
        </li>
        <li class="ativo">
          <button onclick="trocarPagina('unidade','historico_cons')">
            <i class="fa-regular fa-clock"></i> Histórico de Consultas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','medicos')">
            <i class="fa-solid fa-user-doctor"></i> Médicos
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','perfil')">
            <i class="fa-regular fa-building"></i> Perfil
          </button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, Hospital Santa Aurora!</h1>
        <p>Esse é o histórico de consultas da sua unidade</p>
        <div class="acoes_header">
        </div>
      </div>

      <button type="button" onclick="trocarPagina('unidade','perfil')" class="perfil_usuario">
        <span class="avatar">SA</span>
        <span class="perfil_texto">
          <strong>Hospital Santa Aurora</strong>
          <small>Unidade</small>
        </span>
      </button>
    </header>

    <section class="historico_consultas">
      <h2>Histórico de Consultas</h2>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4>Roberto Alves</h4>
            <p>Clínica Geral • Dr. Felipe Rodrigues</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 07 Out 2026
        </span>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4>Camila Nunes</h4>
            <p>Oftalmologia • Dr. João T.</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 02 Out 2026
        </span>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4>Fernando Dias</h4>
            <p>Cardiologia • Dr. Lucas Oliveira</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 30 Set 2026
        </span>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4>Juliana Rocha</h4>
            <p>Dermatologia • Dra. Ana Costa</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 25 Set 2026
        </span>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4>Ricardo Melo</h4>
            <p>Pediatria • Dra. Mariana Almeida</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 18 Set 2026
        </span>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4>Patrícia Lopes</h4>
            <p>Oftalmologia • Dra. Isabela Gomes</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 21 Ago 2026
        </span>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4>Eduardo Pires</h4>
            <p>Clínica Geral • Dr. Felipe Rodrigues</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 11 Ago 2026
        </span>
      </div>
      <div class="consulta">
        <div class="infos_medico">
          <img src="../img/foto_medico.png" alt="Foto do paciente">
          <span>
            <h4>Beatriz Martins</h4>
            <p>Cardiologia • Dr. Lucas Oliveira</p>
          </span>
        </div>
        <span class="infos_consulta">
          <i class="fa-regular fa-calendar"></i> 14 Jul 2026
        </span>
      </div>
    </section>
  </main>`,
    medicos: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('unidade','inicio')">
            <i class="fa-solid fa-house"></i> Início
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','consultas_marc')">
            <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','historico_cons')">
            <i class="fa-regular fa-clock"></i> Histórico de Consultas
          </button>
        </li>
        <li class="ativo">
          <button onclick="trocarPagina('unidade','medicos')">
            <i class="fa-solid fa-user-doctor"></i> Médicos
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','perfil')">
            <i class="fa-regular fa-building"></i> Perfil
          </button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, Hospital Santa Aurora!</h1>
        <p>Gerencie os médicos que atendem na sua unidade</p>
        <div class="acoes_header">
        </div>
      </div>

      <button type="button" onclick="trocarPagina('unidade','perfil')" class="perfil_usuario">
        <span class="avatar">SA</span>
        <span class="perfil_texto">
          <strong>Hospital Santa Aurora</strong>
          <small>Unidade</small>
        </span>
      </button>
    </header>

    <section class="medicos_unidade">
      <div class="titulo_seccao">
        <h2>Solicitações de Entrada</h2>
      </div>
      <div class="medicos lista_solicitacoes">
        <div class="medico">
          <div class="infos_medico">
            <img src="../img/foto_medico.png" alt="Foto do médico" />
            <span>
              <h4>Dr. Rafael Mendes</h4>
              <p>Urologia</p>
            </span>
          </div>
          <div class="botoes_solicitacao">
            <button onclick="confirmarAcaoMedico(this, 'recusar')" class="botao_cancelar">Recusar</button>
            <button onclick="confirmarAcaoMedico(this, 'aceitar')" class="botao_aceitar">Aceitar</button>
          </div>
        </div>
        <div class="medico">
          <div class="infos_medico">
            <img src="../img/foto_medico.png" alt="Foto da médica" />
            <span>
              <h4>Dra. Camila Ribeiro</h4>
              <p>Endocrinologia</p>
            </span>
          </div>
          <div class="botoes_solicitacao">
            <button onclick="confirmarAcaoMedico(this, 'recusar')" class="botao_cancelar">Recusar</button>
            <button onclick="confirmarAcaoMedico(this, 'aceitar')" class="botao_aceitar">Aceitar</button>
          </div>
        </div>
        <div class="medico">
          <div class="infos_medico">
            <img src="../img/foto_medico.png" alt="Foto do médico" />
            <span>
              <h4>Dr. Bruno Costa</h4>
              <p>Otorrinolaringologia</p>
            </span>
          </div>
          <div class="botoes_solicitacao">
            <button onclick="confirmarAcaoMedico(this, 'recusar')" class="botao_cancelar">Recusar</button>
            <button onclick="confirmarAcaoMedico(this, 'aceitar')" class="botao_aceitar">Aceitar</button>
          </div>
        </div>
      </div>
      <p class="sem_solicitacoes">Nenhuma solicitação de entrada pendente.</p>

      <div class="titulo_seccao titulo_medicos_unidade">
        <h2>Médicos da Unidade</h2>
      </div>
      <div class="input_busca">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input class="buscar_medico_input" type="text" placeholder="Buscar médico ou especialidade..." />
      </div>
      <div class="medicos lista_medicos_unidade">
        <div class="medico">
          <div class="infos_medico">
            <img src="../img/foto_medico.png" alt="Foto do médico" />
            <span>
              <h4>Dr. João T.</h4>
              <p>Oftalmologia</p>
            </span>
          </div>
          <button onclick="confirmarAcaoMedico(this, 'remover')" class="botao_cancelar">Remover</button>
        </div>
        <div class="medico">
          <div class="infos_medico">
            <img src="../img/foto_medico.png" alt="Foto da médica" />
            <span>
              <h4>Dra. Isabela Gomes</h4>
              <p>Oftalmologia</p>
            </span>
          </div>
          <button onclick="confirmarAcaoMedico(this, 'remover')" class="botao_cancelar">Remover</button>
        </div>
        <div class="medico">
          <div class="infos_medico">
            <img src="../img/foto_medico.png" alt="Foto do médico" />
            <span>
              <h4>Dr. Lucas Oliveira</h4>
              <p>Cardiologia</p>
            </span>
          </div>
          <button onclick="confirmarAcaoMedico(this, 'remover')" class="botao_cancelar">Remover</button>
        </div>
        <div class="medico">
          <div class="infos_medico">
            <img src="../img/foto_medico.png" alt="Foto da médica" />
            <span>
              <h4>Dra. Mariana Almeida</h4>
              <p>Pediatria</p>
            </span>
          </div>
          <button onclick="confirmarAcaoMedico(this, 'remover')" class="botao_cancelar">Remover</button>
        </div>
        <div class="medico">
          <div class="infos_medico">
            <img src="../img/foto_medico.png" alt="Foto do médico" />
            <span>
              <h4>Dr. Felipe Rodrigues</h4>
              <p>Clínica Geral</p>
            </span>
          </div>
          <button onclick="confirmarAcaoMedico(this, 'remover')" class="botao_cancelar">Remover</button>
        </div>
        <div class="medico">
          <div class="infos_medico">
            <img src="../img/foto_medico.png" alt="Foto da médica" />
            <span>
              <h4>Dra. Ana Costa</h4>
              <p>Dermatologia</p>
            </span>
          </div>
          <button onclick="confirmarAcaoMedico(this, 'remover')" class="botao_cancelar">Remover</button>
        </div>
      </div>
      <p class="sem_resultados">Nenhum médico encontrado.</p>
    </section>
  </main>`,
    perfil: `
  <aside class="barra_lateral">
    <h1>saic</h1>
    <nav>
      <ul>
        <li>
          <button onclick="trocarPagina('unidade','inicio')">
            <i class="fa-solid fa-house"></i> Início
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','consultas_marc')">
            <i class="fa-regular fa-calendar-check"></i> Consultas Marcadas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','historico_cons')">
            <i class="fa-regular fa-clock"></i> Histórico de Consultas
          </button>
        </li>
        <li>
          <button onclick="trocarPagina('unidade','medicos')">
            <i class="fa-solid fa-user-doctor"></i> Médicos
          </button>
        </li>
        <li class="ativo">
          <button onclick="trocarPagina('unidade','perfil')">
            <i class="fa-regular fa-building"></i> Perfil
          </button>
        </li>
        <li class="divisor"></li>
        <li>
          <button onclick="sair()">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sair
          </button>
        </li>
      </ul>
    </nav>
  </aside>

  <main>
    <header>
      <div>
        <h1>Olá, Hospital Santa Aurora!</h1>
        <p>Esse é o perfil da sua unidade, você pode alterar informações aqui.</p>
        <div class="acoes_header">
        </div>
      </div>

      <button type="button" onclick="trocarPagina('unidade','perfil')" class="perfil_usuario">
        <span class="avatar">SA</span>
        <span class="perfil_texto">
          <strong>Hospital Santa Aurora</strong>
          <small>Unidade</small>
        </span>
      </button>
    </header>
    <section class="cartao">
      <form>
        <div class="perfil_formulario">
          <section class="informacoes_principais">
            <h2 id="informacoes_principais">Informações Principais</h2>

            <div class="input_nome_avatar">

              <div class="input_nome">
                <label for="input_nome" class="input_label">Nome da unidade:</label>
                <input minlength="2" maxlength="100" class="input-texto" type="text" name="nome_unidade" id="input_nome"
                  placeholder="Insira o nome da unidade aqui" required value="Hospital Santa Aurora">
              </div>

              <div class="avatar_perfil">
                <span class="icone_avatar_perfil">SA</span>
              </div>
            </div>

            <div>
              <label for="input_descricao" class="input_label">Descrição da unidade:</label>
              <textarea minlength="5" maxlength="255" class="input-texto" name="descricao_unidade" id="input_descricao"
                placeholder="Descreva a unidade aqui" required>Hospital geral com atendimento em diversas especialidades.</textarea>
            </div>

            <div>
              <label for="input_email" class="input_label">E-mail de acesso:</label>
              <input minlength="5" maxlength="150" class="input-texto" type="email" name="email" id="input_email"
                placeholder="Insira o e-mail aqui" required value="contato@santaaurora.com">
            </div>
          </section>

          <section class="informacoes_contato">
            <h2 id="informacoes_endereco">Endereço</h2>

            <div>
              <label for="input_cep" class="input_label">CEP:</label>
              <input minlength="8" maxlength="8" pattern="[0-9]{8}" inputmode="numeric" class="input-texto" type="text"
                name="cep" id="input_cep" placeholder="00000000" required value="14400000">
            </div>

            <div class="linha_inputs">
              <div>
                <label for="input_estado" class="input_label">Estado:</label>
                <input minlength="2" maxlength="150" class="input-texto" type="text" name="estado" id="input_estado"
                  placeholder="Insira o estado aqui" required value="São Paulo">
              </div>

              <div>
                <label for="input_cidade" class="input_label">Cidade:</label>
                <input minlength="2" maxlength="50" class="input-texto" type="text" name="cidade" id="input_cidade"
                  placeholder="Insira a cidade aqui" required value="Franca">
              </div>
            </div>

            <div>
              <label for="input_bairro" class="input_label">Bairro:</label>
              <input minlength="2" maxlength="50" class="input-texto" type="text" name="bairro" id="input_bairro"
                placeholder="Insira o bairro aqui" required value="Centro">
            </div>

            <div class="linha_inputs">
              <div>
                <label for="input_logradouro" class="input_label">Logradouro:</label>
                <input minlength="2" maxlength="150" class="input-texto" type="text" name="logradouro" id="input_logradouro"
                  placeholder="Insira o logradouro aqui" required value="Rua das Flores">
              </div>

              <div class="input_numero">
                <label for="input_numero" class="input_label">Número:</label>
                <input minlength="1" maxlength="20" class="input-texto" type="text" name="numero" id="input_numero"
                  placeholder="Nº" required value="120">
              </div>
            </div>

            <div>
              <label for="input_complemento" class="input_label">Complemento:</label>
              <input minlength="2" maxlength="150" class="input-texto" type="text" name="complemento" id="input_complemento"
                placeholder="Insira o complemento aqui" value="Bloco A">
            </div>
          </section>
        </div>

        <button type="button" class="salvar_alt_button">
          Salvar Alterações
        </button>
      </form>
    </section>
  </main>`
  }
};

function trocarPagina(tipo_painel, destino) {
  if (tipo_painel == 'paciente') {
    if (destino === "inicio") {
      document.body.innerHTML = codigos_html.paciente.inicio;
    } else if (destino === "consultas_marc") {
      document.body.innerHTML = codigos_html.paciente.consultas_marc;
    } else if (destino === "historico_cons") {
      document.body.innerHTML = codigos_html.paciente.historico_cons;
    } else if (destino === "buscar_med") {
      document.body.innerHTML = codigos_html.paciente.busca_medico;

      inicializarBuscaMedico();
    }
    else if (destino === "perfil") {
      document.body.innerHTML = codigos_html.paciente.perfil;
    }
  }
  else if (tipo_painel == 'especialista') {
    if (destino === "inicio") {
      document.body.innerHTML = codigos_html.especialista.inicio;
    } else if (destino === "consultas_marc") {
      document.body.innerHTML = codigos_html.especialista.consultas_marc;
    } else if (destino === "historico_cons") {
      document.body.innerHTML = codigos_html.especialista.historico_cons;
    } else if (destino === "unidades") {
      document.body.innerHTML = codigos_html.especialista.unidades;

      inicializarBuscaUnidade();
    }
    else if (destino === "perfil") {
      document.body.innerHTML = codigos_html.especialista.perfil;
    }
  }
  else if (tipo_painel == 'unidade') {
    if (destino === "inicio") {
      document.body.innerHTML = codigos_html.unidade.inicio;
    } else if (destino === "consultas_marc") {
      document.body.innerHTML = codigos_html.unidade.consultas_marc;
    } else if (destino === "historico_cons") {
      document.body.innerHTML = codigos_html.unidade.historico_cons;
    } else if (destino === "medicos") {
      document.body.innerHTML = codigos_html.unidade.medicos;

      inicializarBuscaMedicosUnidade();
    }
    else if (destino === "perfil") {
      document.body.innerHTML = codigos_html.unidade.perfil;
    }
  }
}

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
