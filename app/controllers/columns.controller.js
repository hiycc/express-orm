const db = require('../models')
const Columns = db.columns
const Op = db.Sequelize.Op

exports.getColumnByUserID = (req, res) => {
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
  }).then((results) => {
    // 201状态码表示创建成功
    res.status(201).send({
      msg: 'create column successfully!'
    })
  })
}