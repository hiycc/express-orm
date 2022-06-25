module.exports = {
  HOST: "120.24.186.236",
  USER: "root",
  PASSWORD: "Luxi!@123",
  DB: "express",
  port:3306,
  dialect: "mysql",
  dialectOptions: {
    charset: 'utf8'
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00'
};
