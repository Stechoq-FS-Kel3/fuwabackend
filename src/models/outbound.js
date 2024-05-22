const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Product = require("./product");

const Outbound = sequelize.define("Outbound", {
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customer_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "id",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Product.hasMany(Outbound, { foreignKey: "product_id" });
Outbound.belongsTo(Product, { foreignKey: "product_id" });

module.exports = Outbound;
