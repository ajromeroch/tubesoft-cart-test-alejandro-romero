const express = require("express");
const router = express.Router();
const products = require("./products");
const carts = require("./carts");

//router.get("/products", products);
router.use("/products", products);
router.use("/carts", carts);

module.exports = router;
