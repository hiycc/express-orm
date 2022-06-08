// 引进express框架
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./app/models')

//用户表的控制器
const userController = require('./app/controllers/users.controller')
const app = express()
const PORT = 3000

//  设置可访问后端的前端来源为*，避免跨域问题
var corsOptions = {
  origin: '*'
}

const signup = require('./router/signup')
app.use('/signup', signup)

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded( { extended: true }))

app.get('/', (req, res) => {
  userController.create(req,res)
})

app.listen(PORT, () => {
  console.log(`zheye backend app listening on port ${PORT}`)
})


db.sequelize.sync()