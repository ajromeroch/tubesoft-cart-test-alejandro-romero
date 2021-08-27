import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  cancelFromCart,
  deleteAllCart,
  getCarts,
  saveCart,
  selectOtherCart,
  updateCart,
  removeCartFromDB,
} from "../store/carts";
import Navbar from "./Navbar";
import CartProducts from "../components/CartProducts";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  cartContainer: {
    height: "100vh",
    width: "80%",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default function CartPage() {
  const classes = useStyles();
  const { activeCart, allCarts, actualCartId } = useSelector(
    (store) => store.carts
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (e, obj, plusMinus) => {
    e.preventDefault();
    const auxFilter = activeCart.filter((onCart) => onCart.id === obj.id)[0];
    const auxQty = !auxFilter ? 0 : auxFilter.qty;
    plusMinus
      ? dispatch(addToCart({ ...obj, qty: auxQty + 1 }))
      : dispatch(removeFromCart({ ...obj, qty: auxQty - 1 })); //tengo la validacion del boton! esa es
  };

  const handleCancel = (e, obj) => {
    e.preventDefault();
    dispatch(cancelFromCart(obj));
  };

  const handleSaveCart = (e) => {
    e.preventDefault();
    dispatch(saveCart(activeCart));
    dispatch(deleteAllCart());
    history.push("/");
  };

  const handleSelection = (e, obj) => {
    e.preventDefault();
    dispatch(selectOtherCart(obj));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCart([activeCart, actualCartId]));
    history.push("/");
  };

  const handleCancelCart = (e) => {
    e.preventDefault();
    dispatch(removeCartFromDB(actualCartId));
    history.push("/");
  };

  //aca tengo que ver que hacer para que se renderice de forma automatica
  useEffect(() => {
    dispatch(getCarts());
  }, []);

  return (
    <div className={classes.container}>
      {console.log("estos son todos los carts desde arriba", allCarts)}
      <Navbar />
      <div className={classes.cartContainer}>
        <CartProducts
          cart={activeCart}
          allCarts={allCarts}
          actualCartId={actualCartId}
          handleClick={handleClick}
          handleCancel={handleCancel}
          handleSaveCart={handleSaveCart}
          handleSelection={handleSelection}
          handleUpdate={handleUpdate}
          handleCancelCart={handleCancelCart}
        />
      </div>
    </div>
  );
}
