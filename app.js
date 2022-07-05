// 引进express框架 后端框架
const express = require('express')
// 转格式
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
//跨域
const cors = require('cors')
const db = require('./app/models')
// const router_index = require('./router/index')
var {  expressjwt: jwt } = require('express-jwt')

const app = express()
const PORT = 3000

//  设置可访问后端的前端来源为*，避免跨域问题
var corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded( { extended: true }))
// app.use(cookieParser('$ is the king'))

//  the middleware of jwt authentication
const { vertifyToken } = require('./token_vertify')
app.use((req, res, next) => {
  //  get token from request
  const token = req.headers['authorization']
  if (token === undefined) {
    return next()
  } else {
    //  vertify token
    vertifyToken(token).then((data) => {
      req.data = data
      return next()
    }).catch((error) => {
      // while got invalid token

      return next()
    })
  }
})
// 中间件
app.use(jwt({
  secret: '$ is the king',
  algorithms: ['HS256'],
  credentialsRequired: false
}).unless({
  path: ['/signup', '/signin', '/posts']
}))

const signup = require('./router/signup')
app.use('/signup', signup)
const signin = require('./router/signin')
app.use('/signin', signin)
const columns = require('./router/columns')
app.use('/columns', columns)
const posts = require('./router/posts')
app.use('/posts', posts)
const users = require('./router/users')
app.use('/users', users)
const files = require('./router/files')
app.use('/files',files)


app.get('/', (req, res) => {
})

app.listen(PORT, () => {
  console.log(`zheye backend app listening on port ${PORT}`)
})


db.sequelize.sync()