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

router.get('/', (req, res) => {
  postsController.getAllPosts(req, res)
})

router.post('/delete/:postId', (req, res) => {
  postsController.delete(req, res)
})

module.exports = router