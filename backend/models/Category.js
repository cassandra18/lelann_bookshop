const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Subcategory = require('./Subcategory');


// Define Category model
const Category = sequelize.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

Category.hasMany(Subcategory);
Subcategory.belongsTo(Category);

module.exports = Category;