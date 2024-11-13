// models/CardType.js

module.exports = (sequelize, DataTypes) => {
    const CardType = sequelize.define('CardType', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Ensures no duplicate card types
      }
    }, {
      tableName: 'card_types',
      timestamps: false // No createdAt or updatedAt fields
    });
  
    // Associations
    // A CardType can be associated with many PaymentDetails
    CardType.hasMany(sequelize.models.PaymentDetail, {
      foreignKey: 'card_type_id',
      as: 'paymentDetails' // Alias for accessing related PaymentDetails
    });
  
    return CardType;
  };
  