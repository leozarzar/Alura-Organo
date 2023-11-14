
const dataPessoas = 
JSON.parse(localStorage.getItem("pessoas")) == null || JSON.parse(localStorage.getItem("pessoas")).length === 0
? [
  {
    nome: "Leonardo Zarzar",
    cargo: "Engenheiro de Produção e Desenvolvedor JavaScript",
    time: "Programação",
    imagem: "https://github.com/leozarzar.png",
    fav: true,
  },
  {
    nome: "Daniel Meyer",
    cargo: "Apes. Together. Strong!",
    time: "Front-end",
    imagem: "https://github.com/pubkey.png",
    fav: false,
  },
  {
    nome: "Richard D. Worth",
    cargo: "Senior Lead Engineer at Capital One",
    imagem: "https://github.com/rdworth.png", 
    time: "Data Science",
    fav: false,
  },
  {
    nome: "Kevin Menard",
    cargo: "@Shopify",
    imagem: "https://github.com/nirvdrum.png",
    time: "Devops",
    fav: false,
  }
]
: JSON.parse(localStorage.getItem("pessoas"));

localStorage.setItem("pessoas",JSON.stringify(dataPessoas));


export default dataPessoas;