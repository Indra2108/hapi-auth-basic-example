const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('test', 'root', 'Indra2108!', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

module.exports = sequelize