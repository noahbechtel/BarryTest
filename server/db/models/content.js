const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  note: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = User
