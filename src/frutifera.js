// ================= FUNÇÃO: CALCULAR IDADE EM MESES =================

// Declaro uma constante que recebe uma Arrow Function.
// Sintaticamente: (parametro) => { bloco }
//
// Semanticamente:
// Essa função recebe uma data de plantio e retorna
// a idade da espécie em meses.
const calcularIdadeEmMeses = (dataPlantio) => {

  // Converto a string recebida em objeto Date
  let dataInicial = new Date(dataPlantio);

  // Pego a data atual do sistema
  let hoje = new Date();

  // Calculo diferença de anos
  let anos = hoje.getFullYear() - dataInicial.getFullYear();

  // Calculo diferença de meses
  let meses = hoje.getMonth() - dataInicial.getMonth();

  // Transformo tudo em meses
  return anos * 12 + meses;
};
  
// ================= FUNÇÃO: INSERIR CARD =================

// Essa função recebe um objeto "especie"
// e cria dinamicamente um card Bootstrap.
const insertCard = (especie) => {

  // Seleciono o container onde os cards serão exibidos
  let container = document.getElementById('especiesContainer');

  // Calculo a idade em meses chamando a função anterior
  let idadeMeses = calcularIdadeEmMeses(especie.dataPlantio);

  // Template string com interpolação dinâmica
  let card = `
    <div class="col-md-4 mb-4">
      <div class="card shadow h-100">
        <div class="card-body">

          <!-- Identificador automático -->
          <span class="badge bg-secondary mb-2">
              ID: ${especie.identificador}
          </span>

          <!-- Nome popular -->
          <h5 class="card-title">${especie.nomePopular}</h5>

          <!-- Nome científico -->
          <h6 class="card-subtitle mb-2 text-muted">
            ${especie.nomeCientifico}
          </h6>

          <!-- Informações adicionais -->
          <p class="card-text">
            <strong>Produção:</strong> ${especie.producaoMedia} Kg <br>
            <strong>Plantio:</strong> ${especie.dataPlantio} <br>
            <strong>Idade:</strong> ${idadeMeses} meses
          </p>

        </div>
      </div>
    </div>
  `;

  // Insiro o card no final do container
  container.insertAdjacentHTML("beforeend", card);
};
  
// ================= LOCAL STORAGE =================

// Busco dados salvos anteriormente.
// JSON.parse converte string em objeto.
// ?? [] garante que, se for null, será iniciado como array vazio.
let especies = JSON.parse(localStorage.getItem('especies')) ?? [];
  
// ================= RENDERIZAÇÃO AUTOMÁTICA =================

// Quando a página carrega,
// percorro todas as espécies salvas
// e renderizo os cards.
for (let especie of especies) {
  insertCard(especie);
}
  
// ================= CAPTURA DO FORMULÁRIO =================

// Seleciono o formulário pelo ID
let especieForm = document.getElementById('especieForm');

// Atribuo evento de envio (submit)
especieForm.onsubmit = (event) => {

    // Impede o recarregamento padrão da página
    event.preventDefault();

    // ================= CAPTURA DOS VALORES =================

    let identificador = Date.now(); // Gera ID único baseado no timestamp
    let nomePopular = document.getElementById('nomePopular').value;
    let nomeCientifico = document.getElementById('nomeCientifico').value;
    let producaoMedia = document.getElementById('producaoMedia').value;
    let dataPlantio = document.getElementById('dataPlantio').value;

    // Crio objeto JSON com os dados capturados
    let especieJson = {
      identificador,
      nomePopular,
      nomeCientifico,
      producaoMedia,
      dataPlantio,
    };

    // Adiciono ao array
    especies.push(especieJson);

    // Atualizo LocalStorage (converto objeto em string)
    localStorage.setItem('especies', JSON.stringify(especies));

    // Atualizo interface imediatamente
    insertCard(especieJson);

    // Limpo o formulário
    especieForm.reset();
  
    // ================= FECHAR MODAL =================

    // Seleciono elemento modal
    let modalElement = document.getElementById('especieModal');

    // Se já existir instância, usa ela.
    // Caso contrário, cria nova.
    let modal = bootstrap.Modal.getInstance(modalElement) 
                || new bootstrap.Modal(modalElement);

    modal.hide();
  
    // ================= TOAST DE CONFIRMAÇÃO =================

    // Exibe notificação usando biblioteca Toastify
    Toastify({
      text: 'Frutífera salva com sucesso!',
      className: 'info',
      style: {
        background: 'linear-gradient(to right, #00b09b, #96c93d)',
      },
    }).showToast();
};