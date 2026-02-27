// A palavra-chave `import` permite reutilizar código de outro arquivo.
// Aqui estou importando o array padrão exportado de informacao.js.
import informacoesCards from './dataset/informacao.js';


// Declaro uma função anônima usando Arrow Function (=>), e atribuo a uma variável.
//
// Sintaticamente:
// (parametro) => { bloco }
//
// Semanticamente:
// Essa função recebe um objeto contendo dados da fruta, e retorna uma string HTML estruturada como um card Bootstrap.
let createInformacoesCard = (informacoesCard) => {

  // Utilizo Template String (crase), que permite interpolação de variáveis com ${variavel}
  let card = `
        <div class="col">
          <div class="card h-100">

            <!-- Imagem dinâmica -->
            <img src="${informacoesCard.url}" 
                 class="card-img-top" 
                 style="height: 220px; object-fit: cover;" 
                 alt="${informacoesCard.titulo}">

            <div class="card-body d-flex flex-column">

              <!-- Título dinâmico -->
              <h5 class="card-title">
                ${informacoesCard.titulo}
              </h5>

              <!-- Subtítulo dinâmico -->
              <p class="card-text">
                ${informacoesCard.subtitulo}
              </p>

              <!-- Botão padrão -->
              <a href="#" class="btn btn-primary">
                Consultar
              </a>

            </div>
          </div>
        </div>
  `;

  // A palavra-chave `return` devolve a string gerada, para quem chamou a função.
  return card;
};


//FUNÇÃO: INSERIR CARD NO DOM

// Declaro outra Arrow Function. Essa função recebe como argumento uma string HTML pronta.
let addInformacaoCard = (card) => {

  // `document.getElementById` é um método do DOM, que busca um elemento pelo id.
  let informacoesCardsRow = document.getElementById('informacoesCardsRow');

  // `insertAdjacentHTML` insere HTML sem substituir o conteúdo existente. O parâmetro 'beforeend' indica que será inserido no final.
  informacoesCardsRow.insertAdjacentHTML('beforeend', card);
};


//FUNÇÃO: CARREGAR TODOS OS CARDS

// Essa função controla o fluxo principal de geração dos cards.
let loadInformacoesCards = () => {

  // Utilizo `for...of` para percorrer arrays.
  // Sintática:
  // for (variavel of array)
  // Semântica:
  // Para cada objeto dentro do array informacoesCards, executa o bloco abaixo.
  for (let informacoesCard of informacoesCards) {

    // Chamo a função que cria o card
    let card = createInformacoesCard(informacoesCard);

    // Depois adiciono esse card ao DOM
    addInformacaoCard(card);
  }
};


//EVENTO DE CARREGAMENTO

// `window.onload` é um evento do navegador. Ele é disparado quando toda a página termina de carregar.
// Aqui estou atribuindo a função loadInformacoesCards
window.onload = loadInformacoesCards;