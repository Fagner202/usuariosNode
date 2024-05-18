// app.js
const express = require('express');
const bodyParser = require('body-parser');
const usuariosRouter = require('./routes/usuarios');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/usuarios', usuariosRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
