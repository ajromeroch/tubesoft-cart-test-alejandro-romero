import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   button: {
//     background: "white",
//     color: "black",
//   },
//   disabledButton: {
//     background: "white",
//     color: "black",
//   },
// });
const useStyles = makeStyles({
  buttonMinus: {
    background: "white",
    border: "none",
    fontSize: 18,
    border: "solid 1 black",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  buttonPlus: {
    background: "white",
    border: "none",
    fontSize: 18,
    border: "solid 1 black",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  disabledButton: {
    background: "white",
    fontSize: 18,
    fontWeight: "lighter",
    color: "black",
    border: "none",

    paddingRight: 10,
    paddingLeft: 10,
  },
});
export default function ButtonsPlusMinus({ cart, handleClick, obj }) {
  const classes = useStyles();
  return (
    // <ButtonGroup size="small" aria-label="small outlined button group">
    //   {cart.map((onCart) => onCart.id).includes(obj.id) && (
    //     <Button
    //       //classes={{ root: classes.root }}
    //       className={classes.button}
    //       onClick={(e) => handleClick(e, obj, false)}
    //     >
    //       -
    //     </Button>
    //   )}
    //   {cart.map((onCart) => onCart.id).includes(obj.id) && (
    //     <Button disabled classes={{ disabled: classes.disabledButton }}>
    //       {cart.filter((onCart) => onCart.id === obj.id)[0].qty}
    //     </Button>
    //   )}
    //   <Button
    //     className={classes.button}
    //     onClick={(e) => handleClick(e, obj, true)}
    //   >
    //     +
    //   </Button>
    // </ButtonGroup>
    <div>
      {cart.map((onCart) => onCart.id).includes(obj.id) && (
        <button
          className={classes.buttonMinus}
          onClick={(e) => handleClick(e, obj, false)}
        >
          -
        </button>
      )}
      {cart.map((onCart) => onCart.id).includes(obj.id) && (
        <button disabled className={classes.disabledButton}>
          {cart.filter((onCart) => onCart.id === obj.id)[0].qty}
        </button>
      )}
      <button
        className={classes.buttonPlus}
        onClick={(e) => handleClick(e, obj, true)}
      >
        +
      </button>
    </div>
  );
}
