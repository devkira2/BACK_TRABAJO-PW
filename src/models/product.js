import { DataTypes } from 'sequelize';
import sequelize from '../config/dataBase.js';
import ProductCategory from './productCategory.js'

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    imageUrl: {
        type: DataTypes.STRING(255),
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    priceUSD: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    pricePEN: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    model: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    screen: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    cpu: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    memory: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    storage: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    graphics: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    length: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    output: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    socket: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    memorySupport: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    busSpeed: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    cooling: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    frequency: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    cache: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    screenSize: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    refreshRate: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    responseTime: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    resolution: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    ports: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    curved: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    fanSize: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    ledType: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    color: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    numberOfFans: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    bus: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    features: {
        type: DataTypes.STRING(100),
        allowNull: true,
    }, 
    category_id: {  
        type: DataTypes.INTEGER,
        references: {
            model: ProductCategory,  
            key: 'id'  
        },
        onUpdate: 'CASCADE',  
        onDelete: 'SET NULL'  
    }
}, {
    timestamps: false,
    tableName: 'products'
});

export default Product;
