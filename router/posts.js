// posts.js - posts相关模块
const express = require('express')
const router = express.Router()
const postsController = require('../app/controllers/posts.controller')

router.post('/create', (req, res) => {
  postsController.create(req, res)
})

router.get('/:columnId', (req, res) => {
  postsController.getPostsByColumnId(req, res)
})

module.exports = router