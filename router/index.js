//  index.js - 主路由
const express = require('express')

const app = express()

const signup = require('./signup')
app.use('/signup', signup)
const signin = require('./signin')
app.use('/signin', signin)
const columns = require('./columns')
app.use('/columns', columns)
const posts = require('./posts')
app.use('/posts', posts)

module.exports = app.router