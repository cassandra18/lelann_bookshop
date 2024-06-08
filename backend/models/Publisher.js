const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Publisher model
const Publisher = sequelize.define('Publisher', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});


module.exports = Publisher;
