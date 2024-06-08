const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Author model
const Author = sequelize.define('Author', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Author;
