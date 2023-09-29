const connection = require('./connection')

function insert(nome, tipo){

    let sql = 'INSERT INTO Jogo SET ?';
    let dados = {nm_jogo: nome, tipo_jogo: tipo}

    connection.query(sql, dados, function(error, results, fields) {
      if (error)throw error
      console.log('Registro adicionado com sucesso.');
    });

    connection.end()
}

exports.insert = insert