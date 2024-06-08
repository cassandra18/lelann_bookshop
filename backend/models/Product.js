const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Author = require('./Author');
const Publisher = require('./Publisher');

// Product model
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    condition: {
        type: DataTypes.ENUM('new', 'used', 'used (good)', 'used (very good)', 'used (acceptable)'),
        allowNull: false
    }
});


Product.belongsTo(Author);
Author.hasMany(Product);

Product.belongsTo(Publisher);
Publisher.hasMany(Product);


module.exports = Product;
