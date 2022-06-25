const jwt = require('jsonwebtoken')

const secret =  '$ is the king' 

exports.setToken = (uid, username, ip) => {
  const payload = {
    id: uid,
    username: username,
    ip: ip,
  }
  return new Promise((resolve, reject) => {
    const token = jwt.sign(payload,secret,{ expiresIn:'1h' })
    resolve(token)
  })
}

exports.vertifyToken = (token) => {
  return new Promise((resolve, reject) => {
    const info = jwt.verify(token.split(' ')[1], secret)
    console.log('info:' + info)
    resolve(info)
  })
}