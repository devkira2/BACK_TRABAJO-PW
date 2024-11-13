// models/ProductCategory.js

module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    }, {
      tableName: 'product_categories',
      timestamps: false // No createdAt/updatedAt fields
    });
  
    // Associations
    // A ProductCategory can have many Products
    ProductCategory.hasMany(sequelize.models.Product, {
      foreignKey: 'category_id',
      as: 'products'
    });
  
    return ProductCategory;
  };
  