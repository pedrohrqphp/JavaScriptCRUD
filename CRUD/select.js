const connection = require('./connection')

let sql = 'SELECT * FROM Personagem WHERE id_personagem = ?'
let id = 2

connection.query(sql, id, function(error, results, fields) {
    if(error) throw error

    if(results == 0) {
        console.log("Nenhum personagem encontrado")
        return
    }

    let personagem = results[0]
    
    console.log('Id:\t\t' + personagem.id_personagem)
    console.log('Nome:\t' + personagem.nm_personagem)
    console.log('Tipo:\t' + personagem.tipo_personagem)
})

connection.end()