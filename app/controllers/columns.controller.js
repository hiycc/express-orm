const db = require('../models')
const Columns = db.columns
const Op = db.Sequelize.Op

exports.getColumnsByUserID = (req, res) => {
  // findAll查询所有符合条件的column
  Columns.findAll({
    where: {
      userId: req.params.id
    },
    raw: true
  }).then((results) => {
    if(results.length !== 0) {
      //如果查询结果不为空
      let columnsRes = []
      results.forEach(element => {
        const column = {
          columnId: element.columnId,
          userId: element.userId,
          title: element.title,
          description: element.description,
          avatar: element.avatar
        }
        columnsRes.push(column)
      });
      res.status(200).send({
        data: columnsRes
      })
    } else {
      // 204状态码，但没有返回内容
      res.status(204).send({
        msg: 'empty columns'
      })
    }
  })
}

exports.create = (req, res) => {
  Columns.create({
    userId: req.body.userId,
    title: req.body.title,
    description: req.body.description,
    avatar: req.body.avatar
  }).then((resultEntity) => {
    // 201状态码表示创建成功
    const dataObj = resultEntity.get({plain: true})
    res.status(201).send({
      msg: 'create column successfully!',
      data: {
        columnId: dataObj.columnId,
        userId: dataObj.userId,
        title: dataObj.title,
        description: dataObj.description,
        avatar: dataObj.avatar
      }
    })
  })
}

exports.getColumnByID = (req, res) => {
  Columns.findOne({
    where: {
      columnId: req.params.columnId
    },
    raw: true
  }).then((results) => {
    if(results) {
      res.status(200).send({
        data: {
          columnId: results.columnId,
          userId: results.userId,
          title: results.title,
          description: results.description,
          avatar: results.avatar
        }
      })
    }else {
      res.status(204).send({
        msg: 'got null of result!'
      })
    }
  })
}

exports.delete = (req, res) => {
  Columns.destroy({
    where: {
      columnId: req.params.columnId
    },
    raw: true
  }).then((results) => {
    if(results) {
      console.log(results)
      res.status(200).send({
        msg: 'delete successfully!'
      })
    }
  })
}