const express = require("express");
const router = express.Router();
const { Cart } = require("../db/models");

// router.get("/", (req, res, err) => {
// console.log
// });
router.post("/", (req, res, err) => {
  const allProducts = req.body;
  console.log("allProducts", allProducts);
  Cart.create({ allProducts })
    .then((result) => res.status(201).send(result))
    .catch((err) => res.send(err));
});
// router.update('/')
// router.delete('/')

module.exports = router;
