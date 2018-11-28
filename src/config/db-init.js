const Sequelize = require('sequelize')
const config = require('./index')

// const seq = new Sequelize(
//   config.name,
//   config.user,
//   config.pass, {
//     host: config.host,
//     port: config.port,
//     dialect: 'mysql',
//     operatorsAliases: false,
//     insecureAuth: true,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000

//     }
//   })

const seq = new Sequelize('hospital', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  insecureAuth: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000

  }
})

module.exports = seq
