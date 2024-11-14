import User from './user.js';
import Product from './product.js';
import Order from './order.js';
import OrderItem from './orderItem.js';
import ProductSale from './productSale.js';
import ProductCategory from './productCategory.js';
import PaymentDetail from './paymentDetail.js';
import CardType from './cardType.js';
import OrderStatus from './orderStatus.js';

// Definir relaciones

User.hasMany(Order, { foreignKey: 'user_id' });
Order.belongsTo(User, { foreignKey: 'user_id' });

Order.hasMany(OrderItem, { foreignKey: 'order_id' });
OrderItem.belongsTo(Order, { foreignKey: 'order_id' });

Product.hasMany(OrderItem, { foreignKey: 'product_id' });
OrderItem.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(ProductSale, { foreignKey: 'product_id' });
ProductSale.belongsTo(Product, { foreignKey: 'product_id' });

ProductCategory.hasMany(Product, { foreignKey: 'category_id' });
Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });

Order.hasOne(PaymentDetail, { foreignKey: 'order_id' });
PaymentDetail.belongsTo(Order, { foreignKey: 'order_id' });

CardType.hasMany(PaymentDetail, { foreignKey: 'card_type_id' });
PaymentDetail.belongsTo(CardType, { foreignKey: 'card_type_id' });

OrderStatus.hasMany(PaymentDetail, { foreignKey: 'status_id' });
PaymentDetail.belongsTo(OrderStatus, { foreignKey: 'status_id' });

User.hasMany(PaymentDetail, { foreignKey: 'person_id' });
PaymentDetail.belongsTo(User, { foreignKey: 'person_id' });

export {
    User,
    Product,
    Order,
    OrderItem,
    ProductSale,
    ProductCategory,
    PaymentDetail,
    CardType,
    OrderStatus
};