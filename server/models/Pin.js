const { DataTypes } = require("sequelize");
const sequelize = require("../db-sequelize");

const Pin = sequelize.define(
  "Pin",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tags: {
      type: DataTypes.JSONB,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      }
    }
  },
  {
    tableName: "pin",
    timestamps: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

sequelize.sync({force:true}).then(()=>{
  console.log("Tables have been created");
}).catch(err=>console.log(err));

module.exports = Pin;