const {client} = require("./connect")
client.connect(err => {if (err) {console.error(err)}})


exports.createTodoTable = () => {
  const sqlCommand = `
    CREATE TABLE IF NOT EXISTS todos (
      id SERIAL PRIMARY KEY NOT NULL,
      title varchar(300) NOT NULL,
      description varchar(750) NOT NULL,
      add_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
      update_date DATE,
      status BOOLEAN DEFAULT FALSE
    );
  `

  client.query(sqlCommand, (err, _) => {
    return err
  })
}


exports.addTodo = (title, description) => {
  const params = [title, description]
  const sqlCommand = `
    INSERT INTO "todos" ("title", "description")
    VALUES ($1, $2)
  `

  client.query(sqlCommand, params, err => {
    return err
  })
}


exports.updateTodo = (id, newTitle, newDescription) => {
  const sqlCommand = `
    UPDATE todos
    SET 
      title = '${newTitle}',
      description = '${newDescription}',
      update_date = CURRENT_TIMESTAMP
    WHERE id = ${id};
  `

  client.query(sqlCommand, (err, _) => {
    return err
  })
}


exports.updateTodoStatus = (id, newStatus) => {
  const sqlCommand = `
    UPDATE todos
    SET 
      status = ${newStatus}
    WHERE id = ${id};
  `

  client.query(sqlCommand, (err, _) => {
    return err
  })
}