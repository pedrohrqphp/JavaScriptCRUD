const express = require('express')
const app = express()

const port = 8081

app.listen(port, () => {
  console.log('Example app listening on port ' + port)
})

//INSERT
app.get('/HTML/cadastrar', function(req, res) {
  res.sendFile(__dirname + '/HTML/cadastrar.html')
})

const insert = require('./CRUD/insert')

app.get('/HTML/cadastrar/:nome/:tipo', function(req, res) {
  let nome = req.params.nome
  let tipo = req.params.tipo

  insert.insert(nome, tipo)
})

//DELETE
app.get('/HTML/deletar', function(rec, res) {
  res.sendFile(__dirname + '/HTML/deletar.html')
})

const del = require('./CRUD/delete')

app.get('/HTML/deletar/:id', function(req, res) {
  let id = req.params.id

  del.del(id)
})

//SELECT
app.get('/HTML/consultar', function(req, res) {
  res.sendFile(__dirname + '/HTML/consultar.html')
})

const select = require('./CRUD/select')

app.get('/HTML/consultar/:id', function(req, res) {
  let id = req.params.id
  
  select.select(id)
})

//UPDATE
app.get('/HTML/atualizar', function(req, res) {
  res.sendFile(__dirname + '/HTML/atualizar.html')
})

const update = require('./CRUD/update')

app.get('/HTML/atualizar/:nome/:tipo/:id', function(req, res) {
  let nome = req.params.nome
  let tipo = req.params.tipo
  let id = req.params.id

  update.update(nome, tipo, id)
})

//ERROR 404
app.get('*', (req, res) => {
  res.send("<h1>404 Página não encontrada!</h1>");
});