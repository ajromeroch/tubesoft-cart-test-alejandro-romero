import React, { useEffect } from "react";
import Navbar from "./Navbar";
//import Sidebar from "./Sidebar";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../store/products";
import { addToCart, removeFromCart } from "../store/carts";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    background: "blue",
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
      <Card
        products={allProducts}
        handleClick={handleClick}
        cart={activeCart}
      />
      {/* <Sidebar /> */}
    </div>
  );
}