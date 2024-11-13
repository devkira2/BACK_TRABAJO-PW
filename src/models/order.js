// models/Order.js

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      total_price_usd: {
        type: DataTypes.DECIMAL(10, 2)
      },
      total_price_pen: {
        type: DataTypes.DECIMAL(10, 2)
      }
    }, {
      tableName: 'orders',
      timestamps: false, // Assuming no createdAt/updatedAt fields
    });
  
    // Associations
    Order.belongsTo(sequelize.models.User, {
      foreignKey: 'user_id',
      as: 'user' // Alias for accessing the associated user
    });
  
    return Order;
  };
  