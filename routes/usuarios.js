// routes/usuarios.js
const express = require('express');
const router = express.Router();
const connection = require('../db');

// Rota para obter todos os usuários
router.get('/', (req, res) => {
  const query = 'SELECT * FROM usuario';
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).send('Erro ao buscar usuários');
    }
    res.json(results);
  });
});

// Rota para adicionar um novo usuário
router.post('/', (req, res) => {
  const { usuario_nome, usuario_senha } = req.body;
  const query = 'INSERT INTO usuario (usuario_nome, usuario_senha) VALUES (?, ?)';
  connection.query(query, [usuario_nome, usuario_senha], (error, results) => {
    if (error) {
      return res.status(500).send('Erro ao adicionar usuário');
    }
    res.status(201).send('Usuário adicionado com sucesso');
  });
});

// Rota para obter um usuário pelo ID
router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM usuario WHERE id = ?';
  connection.query(query, [req.params.id], (error, results) => {
    if (error) {
      return res.status(500).send('Erro ao buscar usuário');
    }
    res.json(results[0]);
  });
});

// Rota para atualizar um usuário pelo ID
router.put('/:id', (req, res) => {
  const { usuario_nome, usuario_senha } = req.body;
  const query = 'UPDATE usuario SET usuario_nome = ?, usuario_senha = ? WHERE id = ?';
  connection.query(query, [usuario_nome, usuario_senha, req.params.id], (error, results) => {
    if (error) {
      return res.status(500).send('Erro ao atualizar usuário');
    }
    res.send('Usuário atualizado com sucesso');
  });
});

// Rota para deletar um usuário pelo ID
router.delete('/:id', (req, res) => {
  const query = 'DELETE FROM usuario WHERE id = ?';
  connection.query(query, [req.params.id], (error, results) => {
    if (error) {
      return res.status(500).send('Erro ao deletar usuário');
    }
    res.send('Usuário deletado com sucesso');
  });
});

module.exports = router;