//  files.model.js - Files Model Defination-
module.exports = (sequelize, Sequelize) => {
  const Files = sequelize.define('files',{
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false
    },
  })
  return Files
}
