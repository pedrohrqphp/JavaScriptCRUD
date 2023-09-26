function DELETE(id) {
    const connection = require('./connection')

    let sql = 'DELETE FROM Personagem WHERE id_personagem = ?'
    let id = 2

    connection.query(sql, id, function(error, results, fields) {
        if(error) throw error
        console.log('Personagem deletado com sucesso')
    })

    connection.end()
}