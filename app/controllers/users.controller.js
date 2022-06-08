const db = require('../models')
const Users = db.users
const Op = db.Sequelize.Op


// 创建并保存User
exports.create = (req, res) => {
  //验证请求
  // if (!req.body.title) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   })
  //   return 
  // }

  const user = {
    username: 'lewis',
    email: 'hiycc@outlook.com',
    password: 'iwanthug'
  };

  Users.create(user).then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || 'something wrong!'
    })
  })
}
