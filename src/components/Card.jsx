import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, ButtonGroup } from "@material-ui/core";
import ButtonsPlusMinus from "./ButtonsPlusMinus";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    background: "gray",
    justifyContent: "space-between",
    alignItems: "center",
  },
  individualItem: {
    display: "flex",
    flexDirection: "column",
    background: "red",
    alignItems: "center",
  },
  img: {
    width: 150,
    height: 150,
  },
});

export default function Card({ products, handleClick, cart }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {products.length &&
        products.map((obj) => {
          return (
            <div className={classes.individualItem} key={obj.id}>
              <span>{obj.name}</span>
              <img className={classes.img} src={obj.img} alt={obj.name} />
              <span>{obj.precio}</span>
              {cart && (
                <ButtonsPlusMinus
                  cart={cart}
                  handleClick={handleClick}
                  obj={obj}
                />
                //   <ButtonGroup
                //     size="small"
                //     aria-label="small outlined button group"
                //   >
                //     {cart.map((onCart) => onCart.id).includes(obj.id) && (
                //       <Button onClick={(e) => handleClick(e, obj, false)}>
                //         -
                //       </Button>
                //     )}
                //     {cart.map((onCart) => onCart.id).includes(obj.id) && (
                //       <Button disabled>
                //         {cart.filter((onCart) => onCart.id === obj.id)[0].qty}
                //       </Button>
                //     )}
                //     <Button onClick={(e) => handleClick(e, obj, true)}>+</Button>
                //   </ButtonGroup>
                //
              )}
            </div>
          );
        })}
    </div>
  );
}
