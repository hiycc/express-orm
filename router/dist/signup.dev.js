"use strict";

// signup.js - 注册模块
var express = require('express');

var router = express.Router();
router.post('/', function (req, res) {
  console.log(req);
  res.send('请求发送成功'); // userController.create(req,res)
});
router.get('/', function (req, res) {
  res.send('注册模块get');
});
module.exports = router;