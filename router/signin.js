// signin.js - 登录模块
const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/users.controller')


router.post('/',(req, res) => {
  usersController.signin(req,res)
})

router.post('/token',(req, res) => {
  usersController.signinToken(req,res)
})

module.exports = router;