const db = require('../models')
const Users = db.users
const Op = db.Sequelize.Op

// token生成插件模块
const jwt = require('jsonwebtoken')


// Token签名
const secret =  '$ is the king'

var getIp = (req) => {
  var ip  = req.headers['origin'] || req.headers['host']
  if (ip.split(',').length > 0) {
      ip = ip.split(',')[0];
  }
  return ip;
}

// 注册逻辑
exports.signup = (req, res) => {
  Users.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      username: req.body.username,
      password: req.body.password
    }
  }).then((results) => {
    if (results[1]) {
      const ip = getIp(req)
      let payload = { uid: results[0].id ,ip: ip}
      let token = jwt.sign(payload, secret);
      console.log('用户信息存储token：' + token)
      res.cookie('token', token, { httpOnly: true, signed: true })
      res.status(200).send({
        token: token,
        message: "用户注册成功"
      })
    } else {
      res.status(400).send({
        message: "邮箱名已经存在"
      })
    }
  })
}

//登录逻辑
exports.signin = (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email
    },
    raw: true
  }).then((results) => {
    if (results.password === req.body.password) {
      const userRes = {
        username: results.username,
        id: results.id
      }
      res.status(200).send(userRes)
    } else {
      res.status(400).send({
        message: '密码错误'
      })
    }
  })

  
}