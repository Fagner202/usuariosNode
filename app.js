// app.js
const express = require('express');
const bodyParser = require('body-parser');
const usuariosRouter = require('./routes/usuarios');

const app = express();
const port = 3000;

// Configurar EJS como motor de templates
app.set('view engine', 'ejs');

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Usar a rota de usuários
app.use('/usuarios', usuariosRouter);

// Rota para exibir o formulário de cadastro de usuário
app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
