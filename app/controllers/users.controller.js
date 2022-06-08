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

// 创建并保存User
exports.create = (req, res) => {
  console.log(req.headers)
  //验证请求
  // if (req.body.email) {
  //   Users.
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   })
  //   return 
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
