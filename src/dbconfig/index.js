const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('test', 'root', 'Indra2108!', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

// try {
//     sequelize.authenticate()
//     console.debug('Database Connect!')
// } catch (error) {
//     console.error('Unable to connect database: ', error)
// }

db = {}
db.sequelize = sequelize // for connecting database
db.Sequelize = Sequelize // for importing library, (avoiding too many imports)

module.exports = db