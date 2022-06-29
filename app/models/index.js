//  index.js  -connect to mysql by sequelize
const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  // 
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./users.model')(sequelize, Sequelize)
db.columns = require('./columns.model')(sequelize, Sequelize)
db.posts = require('./posts.model')(sequelize, Sequelize)
db.files = require('./files.model')(sequelize, Sequelize)

module.exports = db;
