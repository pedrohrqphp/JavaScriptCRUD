const connection = require('./connection')

let sql = 'UPDATE Personagem SET ? WHERE id_personagem = 1'
let dados = {id_personagem: 1, nm_personagem: 'Homem de Ferro', tipo_personagem: 'Morto'}
let id = dados.id

connection.query(sql, [dados, id], function(error, results, fields) {
    if(error) throw error
    console.log('Dados atualizados')
})

connection.end()