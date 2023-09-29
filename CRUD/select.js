const connection = require('./connection')

function select(id) {
    let sql = 'SELECT * FROM Jogo WHERE id_jogo = ?'
    
    connection.query(sql, id, function(error, results, fields) {
        if(error) throw error
    
        if(results == 0) {
            console.log('Nenhum dado encontrado')
            return
        }
    
        const dados = results[0]
    
        console.log('ID: ' + dados.id_jogo)
        console.log('NOME: ' + dados.nm_jogo)
        console.log('TIPO: ' + dados.tipo_jogo)
    })
    
    connection.end()
}

exports.select = select