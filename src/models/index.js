// src/models/index.js
import Product from './Product.js';
import ProductCategory from './ProductCategory.js';

// Definir relaciones
Product.belongsTo(ProductCategory, { foreignKey: 'categoryId' });
ProductCategory.hasMany(Product, { foreignKey: 'categoryId' });

// Exportar los modelos para usarlos en otros archivos
export { Product, ProductCategory };
