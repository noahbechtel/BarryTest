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
router.get('/lock', async (req, res, next) => {
  try {
    await Content.update(
      {locked: true},
      {returning: true, where: {locked: false}}
    )
    const content = await Content.findAll({})
    res.json(content)
  } catch (err) {
    next(err)
  }
})
router.get('/unlock', async (req, res, next) => {
  try {
    await Content.update(
      {locked: false},
      {returning: true, where: {locked: true}}
    )
    const content = await Content.findAll({})
    res.json(content)
  } catch (err) {
    next(err)
  }
})
router.get('/status', async (req, res, next) => {
  try {
    const content = await Content.findAll()
    res.json(content)
  } catch (err) {
    next(err)
  }
})
