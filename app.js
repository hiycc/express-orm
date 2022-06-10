// 引进express框架
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const db = require('./app/models')

const app = express()
const PORT = 3000

//  设置可访问后端的前端来源为*，避免跨域问题
var corsOptions = {
  origin: '*'
}
app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded( { extended: true }))
app.use(cookieParser('$ is the king'))

const signup = require('./router/signup')
app.use('/signup', signup)
const signin = require('./router/signin')
app.use('/signin', signin)
const columns = require('./router/columns')
app.use('/columns', columns)

app.get('/', (req, res) => {
})

app.listen(PORT, () => {
  console.log(`zheye backend app listening on port ${PORT}`)
})


db.sequelize.sync()