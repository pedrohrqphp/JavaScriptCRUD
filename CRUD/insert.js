const connection = require('./connection')

let sql = 'INSERT INTO Personagem SET ?'
let dados = {nm_personagem: 'Loki', tipo_personagem: 'Vilão'}

connection.query(sql, dados, function(error, results, fields) {
    if (error) throw error

    console.log('Personagem adicionado')
})

connection.end()