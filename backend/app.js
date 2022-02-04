const queries = require("./database/queries")
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.json({msg: "index"})
})

const serverPort = 8080
app.listen(serverPort, () => console.log(`Listening on port: ${serverPort}`))