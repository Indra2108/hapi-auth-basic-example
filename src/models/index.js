const { DataTypes } = require('sequelize')
const sequelize = require('../dbconfig')

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true // Enforcing the table name to be equal to the model name
})

module.exports = User

// User.sync({ force: true }) // membuat table

// User.drop() // delete User table

// sequelize.drop() // delete all tables