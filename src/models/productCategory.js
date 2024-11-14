import { DataTypes } from 'sequelize';
import sequelize from '../config/dataBase.js';

const ProductCategory = sequelize.define('ProductCategory', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        unique: true,
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'product_categories'
});

export default ProductCategory;