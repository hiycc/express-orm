// user.js - 用户模块
const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/users.controller')

router.get('/:id', (req, res) => {
  usersController.getUser(req,res)
})

module.exports = router;