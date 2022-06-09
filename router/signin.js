// signin.js - 登录模块
const express = require('express')
const router = express.Router()
const userController = require('../app/controllers/users.controller')


router.post('/',(req, res) => {
  userController.signin(req,res)
})

module.exports = router;