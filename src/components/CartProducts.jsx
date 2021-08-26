import React from "react";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import ButtonsPlusMinus from "./ButtonsPlusMinus";

//aca tenemos que agregar un boton tambien que pueda "cerrar" el modal. no se si aca pero en algun lado
export default function CartProducts({
  cart,
  allCarts,
  actualCartId,
  handleClick,
  handleCancel,
  handleSaveCart,
  handleSelection,
  handleUpdate,
  handleCancelCart,
}) {
  return (
    <div>
      {actualCartId ? (
        <h1>{`Estas viendo el carro ${actualCartId}`}</h1>
      ) : (
        [
          cart && cart.length > 0 ? (
            <h1>Estas creando un nuevo carro</h1>
          ) : (
            <h1>Vuelve al inicio para agregar productos al carro</h1>
          ),
        ]
      )}
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
        {cart && cart.length > 0 ? (
          <div>
            <button onClick={handleSaveCart}>Guardar Carro</button>
            {actualCartId && (
              <button onClick={handleUpdate}>Modificar Carro</button>
            )}
            {actualCartId && (
              <button onClick={handleCancelCart}>Eliminar Carro</button>
            )}
          </div>
        ) : (
          <Link to="/">
            <button>Vuelve al Inicio</button>
          </Link>
        )}
        {/* {cart && cart.length > 0 ? (
          <button onClick={handleSaveCart}>Guardar Carro</button>
        ) : (
          [
            actualCartId ? (
              <div>
                <button>Modificar Carro</button>
                <button>Eliminar Carro</button>
              </div>
            ) : (
              <Link to="/">
                <button>Vuelve al Inicio</button>
              </Link>
            ),
          ]
        )} */}
      </div>
      <div>
        <h1>Revisa otros carros de compra</h1>
        <div>
          {allCarts ? (
            allCarts.map((oneCart) => {
              return (
                <p
                  key={oneCart.id}
                  onClick={(e) => handleSelection(e, oneCart)}
                >{`Carro ${oneCart.id}`}</p>
              );
            })
          ) : (
            <h3>No hay carros creados</h3>
          )}
        </div>
      </div>
    </div>
  );
}
