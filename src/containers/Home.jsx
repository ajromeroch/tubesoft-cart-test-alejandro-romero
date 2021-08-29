import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../store/products";
import { addToCart, removeFromCart } from "../store/carts";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  cardContainer: {
    height: "100vh",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default function Home() {
  const classes = useStyles();
  const { allProducts } = useSelector((store) => store.products);
  const { activeCart } = useSelector((store) => store.carts);
  const dispatch = useDispatch();

  // Handles the click of the card component and adds/removes from the cart
  const handleClick = (e, obj, plusMinus) => {
    e.preventDefault();
    const auxFilter = activeCart.filter((onCart) => onCart.id === obj.id)[0];
    const auxQty = !auxFilter ? 0 : auxFilter.qty;
    plusMinus
      ? dispatch(addToCart({ ...obj, qty: auxQty + 1 }))
      : dispatch(removeFromCart({ ...obj, qty: auxQty - 1 })); //tengo la validacion del boton! esa es
  };

  // Renders all products in initial page
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className={classes.container}>
      <Navbar />
      <div className={classes.cardContainer}>
        {!activeCart ? (
          <h1>Crea un carro y elige productos</h1>
        ) : (
          <h1>Selecciona productos</h1>
        )}
        <Card
          products={allProducts}
          handleClick={handleClick}
          cart={activeCart}
        />
      </div>
    </div>
  );
}
