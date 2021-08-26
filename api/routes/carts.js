const express = require("express");
const router = express.Router();
const { Cart } = require("../db/models");

router.get("/", (req, res, err) => {
  Cart.findAll()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.send(err));
});

router.get("/:id", (req, res, err) => {
  const { id } = req.params;
  Cart.findByPk(id)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.send(err));
});

router.post("/", (req, res, err) => {
  const allProducts = req.body;
  console.log("allProducts", allProducts);
  Cart.create({ allProducts })
    .then((result) => res.status(201).send(result))
    .catch((err) => res.send(err));
});

router.put("/:id", (req, res, err) => {
  const { id } = req.params;
  const updatedCart = req.body;
  console.log("esto llega al update cart en req", req.body);
  Cart.update({ allProducts: updatedCart }, { where: { id } })
    .then((result) => {
      console.log("este es el result", result);
      res.status(201).send(result);
    })
    .catch((err) => res.send(err));
});

router.delete("/:id", (req, res, err) => {
  const { id } = req.params;
  Cart.destroy({ where: { id } })
    .then((result) => {
      console.log("este es el result", result);
      res.sendStatus(200);
    })
    .catch((err) => res.send(err));
});
// router.update('/')
// router.delete('/')

module.exports = router;
