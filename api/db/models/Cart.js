const S = require("sequelize");
const db = require("../db");

class Cart extends S.Model {}

Cart.init(
  {
    allProducts: { type: S.ARRAY(S.JSON) },
    totalPrice: S.FLOAT,
    totalQty: S.INTEGER,
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;
