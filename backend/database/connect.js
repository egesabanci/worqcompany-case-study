const dbConfig = require("../db.config.json")
const {Client} = require("pg")

const clientConfig = {
  user: dbConfig.user,
  host: dbConfig.host,
  database: dbConfig.databaseName,
  password: dbConfig.postgresPassword,
  port: dbConfig.port
}

exports.client = new Client(clientConfig)