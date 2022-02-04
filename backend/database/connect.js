require("dotenv").config()
const {Client} = require("pg")

const clientConfig = {
  user: process.env.user,
  host: process.env.host,
  database: process.env.databaseName,
  password: process.env.postgresPassword,
  port: process.env.port
}

exports.client = new Client(clientConfig)
exports.clientConnection = () => {client.connect(e => console.error(e))}