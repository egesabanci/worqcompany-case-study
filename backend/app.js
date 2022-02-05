const parser = require("body-parser")
const queries = require("./database/queries")
const {client} = require("./database/connect")
let _ = queries.createTodoTable()

const express = require("express")
const app = express()
app.use(parser.urlencoded({extended: true}));


app.get("/todos", (_, res) => {
  const sqlCommand = `
    SELECT * FROM todos;
  `

  client.query(sqlCommand, (err, response) => {
    if (err) {console.error(err)}
    res.json({"response": response.rows})
  })
})


app.post("/add-todo", (req, res) => {
  let [title, desc] = [req.body.title, req.body.description]
  let err = queries.addTodo(title, desc)
  res.json({response: err ? {status: false} : {status: true}})
})


app.post("/update-todo", (req, res) => {
  let p = req.body
  let [id, title, desc] = [p.id, p.newTitle, p.newDescription]
  let err = queries.updateTodo(id, title, desc)
  res.json({response: err ? {status: false} : {status: true}})
})


app.post("/update-todo-status", (req, res) => {
  let err = queries.updateTodoStatus(req.body.id, req.body.status)
  res.json({response: err ? {status: false} : {status: true}})
})


app.post("/delete-todo", (req, res) => {
  let err = queries.deleteTodo(req.body.id)
  res.json({response: err ? {status: false} : {status: true}})
})


const serverPort = 8080
app.listen(serverPort, "0.0.0.0")
console.log(`Running on port: ${serverPort}`)