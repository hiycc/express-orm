// signup.js - 注册模块
const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/users.controller')

router.post('/',(req, res) => {
  userController.create(req,res)
})

router.get('/', (req, res) => {
  res.send('注册模块get')
})

module.exports = router;