// columns.js - columns相关模块
const express = require('express')
const router = express.Router()
const columnsController = require('../app/controllers/columns.controller')

router.get('/:id', (req, res) => {
  columnsController.getColumnByUserID(req,res)
})

router.post('/create', (req, res) => {
  columnsController.create(req, res)
})
module.exports = router
