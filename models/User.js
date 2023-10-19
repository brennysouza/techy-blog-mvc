const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// Bcrypt required per assignment install in terminal: npm install bcrypt
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPass) {
        return bcrypt.compareSync(loginPass, this.password);
    }
}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            length: {
                args: [4, 16],
                msg: "Password must be between 4 and 16 characters"
            }
        }
    }
  },
  {
    hooks: {
        async beforeCreate(userDataNew) {
            userDataNew.password = await bcrypt.hash(userDataNew.password, 10);
            return userDataNew;
            
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;
