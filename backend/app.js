const queries = require("./database/queries")
const {client} = require("./database/connect")
let _ = queries.createTodoTable()

const express = require("express")
const app = express()


app.get("/todos", (_, res) => {
  const sqlCommand = `
    SELECT * FROM todos;
  `

  client.query(sqlCommand, (err, response) => {
    if (err) {console.error(err)}
    res.json({"response": response.rows})
  })
})


app.get("/add-todo/:title/:description", (req, res) => {
  let [title, desc] = [req.params.title, req.params.description]
  let err = queries.addTodo(title, desc)
  res.json({status: err ? "error occured" : "to-do added"})
})


app.get("/update-todo/:id/:newTitle/:newDescription", (req, res) => {
  let p = req.params
  let [id, title, desc] = [p.id, p.newTitle, p.newDescription]
  let err = queries.updateTodo(id, title, desc)
  if (err) {console.error(err)}

  res.json({status: err ? "error occured" : "to-do updated"})
})


app.get("/update-todo-status/:id/:status", (req, res) => {
  let err = queries.updateTodoStatus(req.params.id, req.params.status)
  if (err) {console.error(err)}
  
  res.json({response: err ? "error occured" : "updated"})
})


app.get("/delete-todo/:id", (req, res) => {
  let err = queries.deleteTodo(req.params.id)
  if (err) {console.error(err)}
  
  res.json({response: err ? "error occured" : "deleted"})
})


const serverPort = 8080
app.listen(serverPort, "0.0.0.0")
console.log(`Running on port: ${serverPort}`)