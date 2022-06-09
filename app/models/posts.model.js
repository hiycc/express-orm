module.exports = (sequelize, Sequelize) => {
  const Posts = sequelize.define('posts', {
    postId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT
    },
    image: {
      type: Sequelize.STRING
    },
    columnId: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })
  return Posts
}