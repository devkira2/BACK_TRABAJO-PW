// models/OrderStatus.js

module.exports = (sequelize, DataTypes) => {
    const OrderStatus = sequelize.define('OrderStatus', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      tableName: 'order_statuses',
      timestamps: false // No createdAt/updatedAt fields
    });
  
    // Associations
    // An OrderStatus can be associated with many Orders
    OrderStatus.hasMany(sequelize.models.Order, {
      foreignKey: 'status_id',
      as: 'orders'
    });
  
    return OrderStatus;
  };
  