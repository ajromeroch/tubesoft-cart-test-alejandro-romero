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
  Cart.create({ allProducts })
    .then((result) => res.status(201).send(result))
    .catch((err) => res.send(err));
});

router.put("/:id", (req, res, err) => {
  const { id } = req.params;
  const updatedCart = req.body;

  Cart.update({ allProducts: updatedCart }, { where: { id } })
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => res.send(err));
});

router.delete("/:id", (req, res, err) => {
  const { id } = req.params;
  Cart.destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
