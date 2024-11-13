// models/ProductSale.js

module.exports = (sequelize, DataTypes) => {
  const ProductSale = sequelize.define('ProductSale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Cantidad vendida en esta venta'
    }
  }, {
    tableName: 'product_sales',
    timestamps: false // No createdAt/updatedAt fields
  });

  // Associations
  ProductSale.belongsTo(sequelize.models.Product, {
    foreignKey: 'product_id',
    as: 'product' // Alias for accessing the associated product
  });

  return ProductSale;
};
