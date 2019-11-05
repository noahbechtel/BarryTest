const router = require('express').Router()
const {Content} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const content = await Content.findAll({})
    res.json(content)
  } catch (err) {
    next(err)
  }
})
