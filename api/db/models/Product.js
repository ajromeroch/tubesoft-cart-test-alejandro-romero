const S = require("sequelize");
const db = require("../db");

class Product extends S.Model {}

Product.init(
  {
    name: { type: S.STRING, require: true },
    description: { type: S.TEXT, require: true },
    precio: { type: S.FLOAT, require: true },
    img: { type: S.STRING, require: true },
    stock: { type: S.INTEGER },
    categoria: { type: S.STRING },
    autor: { type: S.STRING },
    pagWeb: { type: S.STRING },
    qty: { type: S.FLOAT, defaultValue: 0 },
  },
  { sequelize: db, modelName: "product" }
);

module.exports = Product;
