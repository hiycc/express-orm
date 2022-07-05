//  files.js  - 文件相关模块
const express = require('express')
const multer = require('multer')
const router = express.Router()
const filesController = require('../app/controllers/files.controller')
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

router.post('/upload', upload.single('file'), (req, res) => {
  filesController.upload(req, res)
})

module.exports = router