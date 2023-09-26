const express = require('express')
const app = express()

const banco = require('./app')

//INICIAR SERVIDOR
const server = app.listen(1999, function() {
    let host = server.address().address
    let port = server.address().port

    console.log(host, port)
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

//SELECT
app.get('/index/:id', function(req, res) {
    let id = req.params.id

    banco.SELECT(id)
})

//INSERT
app.get('/index/:nome/:tipo', function(req, res) {
    let nome = req.params.nome
    let tipo = req.params.tipo

    banco.INSERT(nome, tipo)
})

//UPDATE
app.get('/index/:id/:nome/:tipo', function(req,res) {
    let id = req.params.id
    let nome = req.params.nome
    let tipo = req.params.tipo

    banco.UPDATE(id, nome, tipo)
})

//DELETE
app.get('/index/:id', function(req, res) {
    let id = req.params.id

    banco.DELETE(id)
})