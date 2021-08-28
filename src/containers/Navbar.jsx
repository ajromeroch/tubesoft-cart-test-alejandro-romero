import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, IconButton, Modal, Fade } from "@material-ui/core";
import {
  ShoppingCartOutlined,
  AddShoppingCartOutlined,
} from "@material-ui/icons/";
import { useDispatch, useSelector } from "react-redux";
import { newCart } from "../store/carts";
//import CartProducts from "../components/CartProducts";

//"linear-gradient(90deg, #31708e, #5085a5, #8fc1e3)",
// logo: {
//   backgroundColor: "#8fc1e3", //#f7f9fb (white),
//   height: 50,
//   width: 50,
//   borderRadius: 50,
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   border: "solid #f7f9fb 1px",
//   color: "#f7f9fb ",
//   fontWeight: "bolder",
// },

const useStyles = makeStyles({
  container: {
    background: "black",

    display: "flex",
    justifyContent: "space-around",
  },
  logo: {
    //backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //border: "solid #f7f9fb 1px",
    color: "white ",
    fontWeight: "bolder",
    textDecoration: "none",
  },
  icon: {
    color: "white",
  },
  modal: {
    position: "fixed",
    margin: "auto",
    width: "30%",
    height: "100%",
    // maxWidth: "100%",
    // maxHeight: "100%",
    border: "2px solid #000",
    backgroundColor: "red",
    left: "70%",

    // // width: "50%",
    // // height: "100%",
    // // top: "auto",
    // // right: "auto",
    // // bottom: "auto",
    // // transform: "translate(-50%, -50%)",
    /////OTRO TIPO - https://codepen.io/bootpen/pen/jbbaRa
    // position: "fixed",
    // margin: "auto",
    // width: 320,
    // height: "100%",
    // transform: "translate3d(0%, 0, 0)",
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

// background: rgb(2,0,36);
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
