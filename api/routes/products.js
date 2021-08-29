const express = require("express");
const router = express.Router();
const { Product } = require("../db/models");

router.get("/", (req, res, err) => {
  Product.findAll()
    .then((products) => res.status(200).send(products))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
