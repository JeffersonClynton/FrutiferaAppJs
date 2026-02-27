//ESTRUTURA DE DADOS

// Declaro uma variável chamada informacoesCards. Ela armazena um ARRAY de OBJETOS.
// Semanticamente:
// Cada objeto representa uma fruta que será exibida dinamicamente na interface em formato de card.
// Sintaticamente:
// [] representa um array
// {} representa um objeto
let informacoesCards = [

  // OBJETO 1
  {
    // URL da imagem que será exibida no card
    url: 'https://agroflorestamazonia.com/wp-content/uploads/2023/05/laranja00.jpg',

    // Título da fruta (nome popular)
    titulo: 'Laranja',

    // Texto descritivo exibido abaixo do título
    subtitulo: 'Rica em vitamina C e muito cultivada na propriedade.',
  },

  // OBJETO 2
  {
    url: 'https://th.bing.com/th/id/R.cac57d31e6b056459394c0c41e78f314?rik=aH4M%2faLFBTzK4g&riu=http%3a%2f%2fwww.saudedica.com.br%2fwp-content%2fuploads%2f2014%2f08%2fuva_benef%c3%adcios.jpg&ehk=aI0%2bndX3W6ResNFCs7%2bjevVi0bkN%2bsdf9OsyDXj%2fX6w%3d&risl=&pid=ImgRaw&r=0',
    titulo: 'Uva',
    subtitulo: 'Fonte de antioxidantes e excelente para produção.',
  },

  // OBJETO 3
  {
    url: 'https://capitalist.com.br/wp-content/uploads/2022/03/manga-frutas-beneficios-9_Easy-Resize.com_.jpg',
    titulo: 'Manga',
    subtitulo: 'Alta produtividade e grande aceitação no mercado.',
  },

  // OBJETO 4
  {
    url: 'https://jpimg.com.br/uploads/2025/01/7-beneficios-da-maca-para-a-saude-e-formas-criativas-de-usa-la.jpg',
    titulo: 'Maçã',
    subtitulo: 'Cultivo estratégico para diversificação da produção.',
  },
];


// EXPORTAÇÃO

// Utilizo `export default` para exportar o array como padrão.
export default informacoesCards;
// export { informacoesCards };