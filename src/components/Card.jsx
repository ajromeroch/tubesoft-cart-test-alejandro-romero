import React from "react";
import { makeStyles } from "@material-ui/core";
import ButtonsPlusMinus from "./ButtonsPlusMinus";
import { formatter } from "../utils/utils";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    //background: "gray",
    justifyContent: "space-around",
    alignItems: "center",
  },
  individualItemContainer: {
    height: 400,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    //background: "black",
    color: "white",
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flexBasis: "30%",
  },
  individualItem: {
    height: "100%",
    width: "100%",
    maxWidth: 250,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    background: "gray",
    boxShadow: "0px 0px 3px 3px black",
  },
  titles: {
    fontSize: "large",
    textAlign: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
});

export default function Card({ products, handleClick, cart }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {products.length &&
        products.map((obj) => {
          return (
            <div className={classes.individualItemContainer} key={obj.id}>
              <div className={classes.individualItem}>
                <span className={classes.titles}>{obj.name}</span>
                <img className={classes.img} src={obj.img} alt={obj.name} />
                <span>{formatter.format(obj.precio)}</span>
                {cart && (
                  <ButtonsPlusMinus
                    cart={cart}
                    handleClick={handleClick}
                    obj={obj}
                  />
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
