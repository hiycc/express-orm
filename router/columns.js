// columns.js - columns相关模块
const express = require('express')
const router = express.Router()
const columnsController = require('../app/controllers/columns.controller')

router.get('/:id', (req, res) => {
  columnsController.getColumnsByUserID(req,res)
})

router.post('/create', (req, res) => {
  columnsController.create(req, res)
})

router.get('/detail/:columnId', (req, res) => {
  columnsController.getColumnByID(req, res)
})

router.post('/delete/:columnId', (req, res) => {
  columnsController.delete(req, res)
})
module.exports = router
