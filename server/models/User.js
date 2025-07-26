const sequelize = require("../db-sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updated_at"
    }
  },
  {
    tableName: "users",
    timestamps: true,
    underscored: true
  }
);

sequelize.sync({force:true}).then(()=>{
  console.log("Tables have been created");
}).catch(err=>console.log(err));

module.exports = User;