// models/OrderItem.js

module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price_usd: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      price_pen: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    }, {
      tableName: 'order_items',
      timestamps: false // No createdAt/updatedAt fields
    });
  
    // Associations
    OrderItem.belongsTo(sequelize.models.Order, {
      foreignKey: 'order_id',
      as: 'order' // Alias for accessing the associated order
    });
  
    OrderItem.belongsTo(sequelize.models.Product, {
      foreignKey: 'product_id',
      as: 'product' // Alias for accessing the associated product
    });
  
    return OrderItem;
  };
  