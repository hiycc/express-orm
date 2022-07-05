const db = require('../models')
const Posts = db.posts
const Op = db.Sequelize.Op

exports.create = (req, res) =>{
  console.log(req.body)
  Posts.create({
    userId: req.data.id,
    title: req.body.title,
    content: req.body.content,
    columnId: req.body.columnId
  }).then((resultEntity) => {
    // 201状态码表示创建成功
    const dataObj = resultEntity.get({plain: true})
    console.log(dataObj)
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

exports.getAllPosts = (req, res) => {
  db.sequelize.query('select posts.postId,userId,title,content,posts.createdAt,users.username from posts, users where posts.userId = users.id order by createdAt DESC;').then(([results, metadata]) => {
  /** 
   * 返回格式 [{ postId, userId, title, content, createdAt, username }]
  */
    if(results.length !== 0) {
      res.status(200).send({
        data: results,
        user: req.data
      })
    }
  })
}

exports.delete = (req, res) => {
  Posts.destroy({
    where: {
      postId: req.params.postId
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

exports.deleteByColumnId = (columnId) => {
  Posts.destroy({
    where: {
      columnId: columnId
    },
    raw: true
  })
}