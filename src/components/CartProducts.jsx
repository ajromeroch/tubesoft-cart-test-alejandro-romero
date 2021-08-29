import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core";
import ButtonsPlusMinus from "./ButtonsPlusMinus";

const useStyles = makeStyles({
  container: {
    width: "100%",
  },

  individualItem: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    border: "solid 3px black",
    borderRadius: 10,
    background: "gray",
    boxShadow: "0px 0px 1px 1px black",
    "@media(max-width: 420px)": {
      flexDirection: "column",
    },
  },
  img: {
    width: 200,
    height: 200,
  },
  nameOnCard: {
    color: "white",
    fontSize: "medium",
  },
  cartButtons: {
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

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
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {actualCartId && cart.length > 0 ? (
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
            <div key={onCart.id} className={classes.individualItem}>
              <img className={classes.img} src={onCart.img} alt={onCart.name} />
              <span className={classes.nameOnCard}>{onCart.name}</span>
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
          <div className={classes.cartButtons}>
            <div>
              <button onClick={handleSaveCart}>Guardar Carro</button>
            </div>

            {actualCartId !== 0 && (
              <div>
                <button onClick={handleUpdate}>Modificar Carro</button>
              </div>
            )}

            {actualCartId !== 0 && (
              <div>
                <button onClick={handleCancelCart}>Eliminar Carro</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/">
            <button>Vuelve al Inicio</button>
          </Link>
        )}
      </div>
      <div>
        <h1>Revisa otros carros de compra</h1>
        <div>
          {allCarts && allCarts.length > 0 ? (
            allCarts.map((oneCart) => {
              return (
                <h4
                  key={oneCart.id}
                  onClick={(e) => handleSelection(e, oneCart)}
                >{`Carro ${oneCart.id}`}</h4>
              );
            })
          ) : (
            <h4>No hay carros creados</h4>
          )}
        </div>
      </div>
    </div>
  );
}
