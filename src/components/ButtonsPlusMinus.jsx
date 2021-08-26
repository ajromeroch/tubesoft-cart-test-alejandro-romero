import React from "react";
import { Button, ButtonGroup } from "@material-ui/core";

export default function ButtonsPlusMinus({ cart, handleClick, obj }) {
  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      {cart.map((onCart) => onCart.id).includes(obj.id) && (
        <Button onClick={(e) => handleClick(e, obj, false)}>-</Button>
      )}
      {cart.map((onCart) => onCart.id).includes(obj.id) && (
        <Button disabled>
          {cart.filter((onCart) => onCart.id === obj.id)[0].qty}
        </Button>
      )}
      <Button onClick={(e) => handleClick(e, obj, true)}>+</Button>
    </ButtonGroup>
  );
}
