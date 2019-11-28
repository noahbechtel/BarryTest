const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Content = db.define('content', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  note: {
    type: Sequelize.STRING,
    allowNull: false
  },
  locked: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Content
