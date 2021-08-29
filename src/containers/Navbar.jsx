import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, IconButton } from "@material-ui/core";
import {
  ShoppingCartOutlined,
  AddShoppingCartOutlined,
} from "@material-ui/icons/";
import { useDispatch, useSelector } from "react-redux";
import { newCart } from "../store/carts";

const useStyles = makeStyles({
  container: {
    background: "black",

    display: "flex",
    justifyContent: "space-around",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white ",
    fontWeight: "bolder",
    textDecoration: "none",
  },
  icon: {
    color: "white",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { activeCart } = useSelector((store) => store.carts);

  const handleNewCart = () => {
    dispatch(newCart());
  };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.container}>
      <Link to="/" className={classes.logo}>
        <h2>FG Joyas</h2>
      </Link>
      <div>
        {console.log("active cart", activeCart)}
        {!activeCart ? (
          <IconButton className={classes.icon} onClick={handleNewCart}>
            <AddShoppingCartOutlined />
          </IconButton>
        ) : null}
        <Link to="/cart">
          <IconButton onClick={handleModal}>
            <ShoppingCartOutlined className={classes.icon} />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}
