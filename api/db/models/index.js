const S = require("sequelize");
const Product = require("./Product");
const Cart = require("./Cart");

// Cart.hasMany(Product);
// Product.belongsTo(Cart);

Product.belongsToMany(Cart, { through: "ProductCart" });
Cart.belongsToMany(Product, { through: "ProductCart" });

module.exports = { Product, Cart };
