module.exports = (sequelize, Sequelize) => {
  const Columns = sequelize.define('columns',{
    columnId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    },
    avatar: {
      type: Sequelize.STRING
    }
  })
  return Columns
}