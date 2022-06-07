const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000

app.set("view engine", "ejs");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

let detalhesSelecionado;
let idEscolhido;


const loteProdutos = [
  {
    id: 1,
    nome: "REVESTIMENTO GD-4262",
    dimensoes: "30x34cm",
    descricao: "Banheiros em Áreas Secas, Cozinhas, Garagens Cobertas, Hall de entrada, Lavabos e Varandas Gourmet Cobertas.",
    imagem: "/img/img01.jpg",
    preco: 54.90
  },
  {
    id: 2,
    nome: "REVESTIMENTO GD-4263",
    dimensoes: "30x30cm",
    descricao: "Banheiros em Áreas Secas, Cozinhas, Garagens Cobertas, Hall de entrada, Lavabos e Varandas Gourmet Cobertas.",
    imagem: "/img/img02.jpg",
    preco: 34.90
  },
  {
    id: 3,
    nome: "REVESTIMENTO GD-4264",
    dimensoes: "30x30cm",
    descricao: "Banheiros em Áreas Secas, Cozinhas, Garagens Cobertas, Hall de entrada, Lavabos e Varandas Gourmet Cobertas.",
    imagem: "/img/img03.jpg",
    preco: 69.90
  },
  {
    id: 4,
    nome: "REVESTIMENTO GD-4265",
    dimensoes: "30x30cm",
    descricao: "Banheiros em Áreas Secas, Cozinhas, Garagens Cobertas, Hall de entrada, Lavabos e Varandas Gourmet Cobertas.",
    imagem: "/img/img04.jpg",
    preco: 45.90
  },
  {
    id: 5,
    nome: "REVESTIMENTO GD-4266",
    dimensoes: "30x30cm",
    descricao: "Banheiros em Áreas Secas, Cozinhas, Garagens Cobertas, Hall de entrada, Lavabos e Varandas Gourmet Cobertas.",
    imagem: "/img/img05.jpg",
    preco: 61.90
  },
  {
    id: 6,
    nome: "REVESTIMENTO GD-4267",
    dimensoes: "30x30cm",
    descricao: "Banheiros em Áreas Secas, Cozinhas, Garagens Cobertas, Hall de entrada, Lavabos e Varandas Gourmet Cobertas.",
    imagem: "/img/img06.jpg",
    preco: 54.90
  },
  {
    id: 7,
    nome: "REVESTIMENTO GD-4268",
    dimensoes: "30x34cm",
    descricao: "Banheiros em Áreas Secas, Cozinhas, Garagens Cobertas, Hall de entrada, Lavabos e Varandas Gourmet Cobertas.",
    imagem: "/img/img07.jpg",
    preco: 62.90
  },
  {
    id: 8,
    nome: "REVESTIMENTO GD-4269",
    dimensoes: "25x25cm",
    descricao: "Banheiros em Áreas Secas, Cozinhas, Garagens Cobertas, Hall de entrada, Lavabos e Varandas Gourmet Cobertas.",
    imagem: "/img/img08.jpg",
    preco: 84.90
  },
  {
    id: 9,
    nome: "REVESTIMENTO GD-4270",
    dimensoes: "25x25cm",
    descricao: "Banheiros em Áreas Secas, Cozinhas, Garagens Cobertas, Hall de entrada, Lavabos e Varandas Gourmet Cobertas.",
    imagem: "/img/img09.jpg",
    preco: 84.90
  },
  
];

let produto = undefined;
let mensagem = "";

// Rotas
app.get("/", (req, res) => {
    res.render("index", {loteProdutos, produto, mensagem});
    mensagem = "";
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", { loteProdutos, produto });
});


app.get('/detalhes/:id', (req, res) => {
  idEscolhido = +req.params.id;
  detalhesSelecionado = loteProdutos.find(e => e.id == idEscolhido);
  mensagem = "";
  res.render('detalhes', {loteProdutos, detalhesSelecionado});
});


app.post("/create", (req, res) => {
  const produto = req.body;
  produto.id = loteProdutos.length + 1;
  loteProdutos.push(produto);
  mensagem = "Novo produto Cadastrado com SUCESSO!";
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
