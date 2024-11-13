// models/User.js

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombres: {
        type: DataTypes.STRING,
        allowNull: false
      },
      apellidos: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipoDocumento: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nroDocumento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true // Ensure the document number is unique
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure the email is unique
        validate: {
          isEmail: true // Validate that the email format is correct
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      repetirPassword: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
      tableName: 'users',
      timestamps: false, // Assuming you're not using createdAt/updatedAt fields.
    });
  
    // Associations
    // A user can have many orders
    User.hasMany(sequelize.models.Order, {
      foreignKey: 'user_id',
      as: 'orders' // alias for the relationship
    });
  
    // A user can have many payment details
    User.hasMany(sequelize.models.PaymentDetail, {
      foreignKey: 'person_id',
      as: 'paymentDetails' // alias for the relationship
    });
  
    // Optional: Add instance methods or hooks (for password hashing, etc.)
    User.beforeCreate((user, options) => {
      // You could hash the password here before saving
      // user.password = hashPassword(user.password); (add your hashing logic)
    });
  
    return User;
  };
  