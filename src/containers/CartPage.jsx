import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  cancelFromCart,
  saveCart,
} from "../store/carts";
import Navbar from "./Navbar";
import CartProducts from "../components/CartProducts";

export default function CartPage() {
  const { activeCart } = useSelector((store) => store.carts);
  const dispatch = useDispatch();

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
  };

  return (
    <div>
      <Navbar />
      <CartProducts
        cart={activeCart}
        handleClick={handleClick}
        handleCancel={handleCancel}
        handleSaveCart={handleSaveCart}
      />
    </div>
  );
}
