// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import  database connection from config.js
const sequelize = require('../config/connection');

// Initialize  model (table) by extending off Sequelize's Model class
class selectedAnimals extends Model {}

// Fields and Rules for model
selectedAnimals.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = selectedAnimals;