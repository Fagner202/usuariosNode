const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',  // Endereço do servidor MySql
    user: 'root',       // Usuário do MySql
    password: 'toor',   // Senha do MySql
    database: 'project' // Nome do banco de dados
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:',  err.stack);
        return;
    }
    console.log('Conectado ao banco de dados como ID ' + connection.threadId);
});

module.exports = connection;