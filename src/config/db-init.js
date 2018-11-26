const Sequelize = require('sequelize')
const config = require('./index')

const seq = new Sequelize(
    config.app.name,
    config.database.opts.user,
    config.database.opts.pass, {
      host: config.database.url,
      dialect: 'mysql',
      operatorsAliases: false,

      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000

      }
    })
// Sequelize.authenticate().then(() => {
//   console.log('11')
// }).catch(err => {
//   console.log('22', err)
//   })

module.exports = seq
