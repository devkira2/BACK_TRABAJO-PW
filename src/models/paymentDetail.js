// models/PaymentDetail.js

module.exports = (sequelize, DataTypes) => {
    const PaymentDetail = sequelize.define('PaymentDetail', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cardholder_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      card_number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      card_cvv: {
        type: DataTypes.NUM,
        allowNull: false
      },
      expiration_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      card_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL(10, 2)
      }
    }, {
      tableName: 'payment_details',
      timestamps: false, // Assuming no createdAt/updatedAt fields
    });
  
    // Associations
    PaymentDetail.belongsTo(sequelize.models.User, {
      foreignKey: 'person_id',
      as: 'user' // Alias for accessing the associated user
    });
  
    return PaymentDetail;
  };
  