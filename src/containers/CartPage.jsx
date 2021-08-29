import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  newCart,
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
      : dispatch(removeFromCart({ ...obj, qty: auxQty - 1 }));
  };

  const handleCancel = (e, obj) => {
    e.preventDefault();
    dispatch(cancelFromCart(obj));
  };

  const handleSaveCart = (e) => {
    e.preventDefault();
    dispatch(saveCart(activeCart));
    dispatch(deleteAllCart());
    window.localStorage.clear();
    history.push("/");
  };

  const handleSelection = (e, obj) => {
    e.preventDefault();
    dispatch(selectOtherCart(obj));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCart([activeCart, actualCartId]));
    window.localStorage.clear();
    history.push("/");
  };

  const handleCancelCart = (e) => {
    e.preventDefault();
    dispatch(removeCartFromDB(actualCartId));
    window.localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    dispatch(getCarts());
    !activeCart &&
      dispatch(newCart(JSON.parse(`${window.localStorage.getItem("CART")}`)));
  }, []);

  useEffect(() => {
    if (activeCart !== null)
      window.localStorage.setItem("CART", JSON.stringify(activeCart));
  }, [activeCart]);

  return (
    <div className={classes.container}>
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
