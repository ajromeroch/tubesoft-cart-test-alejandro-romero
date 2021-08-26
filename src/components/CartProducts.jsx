import React from "react";
import { Button, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import ButtonsPlusMinus from "./ButtonsPlusMinus";

//aca tenemos que agregar un boton tambien que pueda "cerrar" el modal. no se si aca pero en algun lado
export default function CartProducts({
  cart,
  handleClick,
  handleCancel,
  handleSaveCart,
}) {
  return (
    <div>
      {cart &&
        cart.map((onCart) => {
          console.log("aca llego", onCart.name);
          return (
            <div key={onCart.id}>
              <img src={onCart.img} alt={onCart.name} />
              <span>{onCart.name}</span>
              <ButtonsPlusMinus
                cart={cart}
                handleClick={handleClick}
                obj={onCart}
              />
              <IconButton onClick={(e) => handleCancel(e, onCart)}>
                <CancelIcon />
              </IconButton>
            </div>
          );
        })}
      <div>
        {cart ? (
          <button onClick={handleSaveCart}>Guardar Carro</button>
        ) : (
          <button>Vuelta a Inicio</button>
        )}
      </div>
      <div>
        <h1>Revisa otros carros de compra</h1>
        <div>
          <p>aca deben ir los otros carros</p>
        </div>
      </div>
    </div>
  );
}
