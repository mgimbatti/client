const { DataTypes } = require('sequelize');

// Connect to sequelize and export the function model

module.exports = (sequelize) => {
  // Defining model
  sequelize.define('property', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    prop_type: {
      type: DataTypes.ENUM,
      values: ['house', 'apartment'],
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    street_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    stratum: {
      type: DataTypes.INTEGER,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    m2: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    years: {
      type: DataTypes.INTEGER,
    },
    pool: {
      type: DataTypes.BOOLEAN,
    },
    backyard: {
      type: DataTypes.BOOLEAN,
    },
    gym: {
      type: DataTypes.BOOLEAN,
    },
    bbq: {
      type: DataTypes.BOOLEAN,
    },
    parking_lot: {
      type: DataTypes.BOOLEAN,
    },
    garden: {
      type: DataTypes.BOOLEAN,
    },
    elevator: {
      type: DataTypes.BOOLEAN,
    },
    security: {
      type: DataTypes.BOOLEAN,
    },
  });
};
