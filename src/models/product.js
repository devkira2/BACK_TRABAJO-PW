// models/Product.js

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      price_usd: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      price_pen: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      model: {
        type: DataTypes.STRING,
        allowNull: true
      },
      screen: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cpu: {
        type: DataTypes.STRING,
        allowNull: true
      },
      memory: {
        type: DataTypes.STRING,
        allowNull: true
      },
      storage: {
        type: DataTypes.STRING,
        allowNull: true
      },
      graphics: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'products',
      timestamps: false // No createdAt/updatedAt fields
    });
  
    // Associations
    // Each product belongs to one category
    Product.belongsTo(sequelize.models.ProductCategory, {
      foreignKey: 'category_id',
      as: 'category'
    });
  
    // Each product can be part of many order items
    Product.hasMany(sequelize.models.OrderItem, {
      foreignKey: 'product_id',
      as: 'orderItems'
    });
  
    // Each product can have multiple sales records
    Product.hasMany(sequelize.models.ProductSale, {
      foreignKey: 'product_id',
      as: 'productSales'
    });
  
    return Product;
  };
  