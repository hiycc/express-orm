// signup.js - 注册模块
const express = require('express')
const router = express.Router()

router.post('/',(req, res) => {
  res.send('注册请求')
})

router.get('/', (req, res) => {
  res.send('注册模块get')
})

module.exports = router;