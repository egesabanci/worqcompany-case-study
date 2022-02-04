const {client} = require("./connect")
client.connect(err => {if (err) {console.error(err)}})

exports.createTodoTable = () => {
  throw new Error("Not implemented")
}

exports.addTodo = () => {
  throw new Error("Not implemented")
}

exports.updateTodo = () => {
  throw new Error("Not implemented")
}

exports.deleteTodo = () => {
  throw new Error("Not implemented")
}