
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Product = require('./Product');


// Subcategory model
const Subcategory = sequelize.define('Subcategory', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Subcategory.hasMany(Product);
Product.belongsTo(Subcategory);

Subcategory.hasMany(Subcategory, { as: 'Subcategories', foreignKey: 'parent_id' });
Subcategory.belongsTo(Subcategory, { as: 'Parent', foreignKey: 'parent_id' });


module.exports = Subcategory;
