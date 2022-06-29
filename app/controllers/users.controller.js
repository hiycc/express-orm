const db = require('../models')
const Users = db.users
const Op = db.Sequelize.Op

const { setToken } = require('../../token_vertify')

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
    console.log(results)
    if (results[1]) {
      const ip = getIp(req)
      const uid = results[0].id
      const uname = results[0].username
      // let payload = { uid: results[0].id, ip: ip, time: new Date().getTime}
      // // 默认 HS256
      // const token = jwt.sign(payload, secret, (err, token) => {
      //   if(err) {
      //     return console.log('生成token失败！')
      //   }
      //   console.log('用户信息存储token：' + token)
      // });
      setToken(uid, uname, ip).then((token) => {
        res.status(200).send({
          token: token,
          username: results.username,
          id: results.id,
          message: "用户注册成功"
        })
      })
      // res.cookie('token', token, { httpOnly: true, signed: true })
    } else {
      res.status(400).send({
        message: "邮箱名已经存在"
      })
    }
  })
}

exports.signinToken = (req, res) => {
  console.log(req.params)
}

//登录逻辑
exports.signin = (req, res) => {
  Users.findOne({
    where: {
      email: req.body.email
    },
    raw: true
  }).then((results) => {
    if (results) {
      if (results.password === req.body.password) {
        const ip = getIp(req)
        const uid = results.id
        const uname = results.username
        setToken(uid, uname, ip).then((token) => {
          res.status(200).send({
            token: token,
            username: results.username,
            id: results.id,
            message: "登录成功"
          })
        }).catch((err) => {
          res.status(500).send({
            message: "登录失败"
          })
        }
        )
      } else {
        res.status(400).send({
          message: "密码错误"
        })
      }
    } else {
      res.status(400).send({
        message: "邮箱不存在"
      })
    }
  })
}

exports.getUser = (req, res) => {
  Users.findOne({
    where: {
      id: req.params.id
    },
    raw: true
  }).then((results) => {
    const userRes = {
      username: results.username,
      id: results.id,
      email: results.email
    }
    res.status(200).send(userRes)
  })
}