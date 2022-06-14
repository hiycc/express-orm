const db = require('../models')
const Posts = db.posts
const Op = db.Sequelize.Op

exports.create = (req, res) =>{
  Posts.create({
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    columnId: req.body.columnId
  }).then((resultEntity) => {
    // 201状态码表示创建成功
    const dataObj = resultEntity.get({plain: true})
    res.status(201).send({
      msg: 'create post successfully!',
      data: {
        columnId: dataObj.columnId,
        userId: dataObj.userId,
        title: dataObj.title,
        content: dataObj.content,
        createAt: dataObj.createAt,
        postId: dataObj.postId
      }
    })
  })
}

exports.getPostsByColumnId = (req, res) => {
  Posts.findAll({
    where: {
      columnId: req.params.columnId
    },
    raw: true
  }).then((results) => {
    if(results) {
      console.log(results)
      let resPosts = []
      results.forEach(element => {
        const post = {
          postId: element.postId,
          userId: element.userId,
          title: element.title,
          content: element.content,
          image: element.image,
          columnId: element.columnId,
          createAt: element.createAt
        }
        resPosts.push(post)
      })
      res.status(200).send({
        data: resPosts
      })
    }else {
      res.status(204).send({
        msg: 'got null of result!'
      })
    }
  })
}