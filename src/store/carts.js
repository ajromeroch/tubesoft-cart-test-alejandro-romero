import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialVal = {
  activeCart: null,
};

const newCart = createAction("NEW_CART");
const addToCart = createAction("ADD_TO_CART");
const removeFromCart = createAction("REMOVE_FROM_CART");
const cancelFromCart = createAction("CANCEL_FROM_CART");
const saveCart = createAsyncThunk("SAVE_CART", (req, res) => {
  console.log("llege aca");
  console.log("este es el req", req);
  axios
    .post("http://localhost:3001/api/carts", req)
    .then((res) => {
      console.log("esto retorna el back", res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
});

const cartsReducer = createReducer(initialVal, {
  [newCart]: (state, action) => {
    state.activeCart = [];
  },
  [addToCart]: (state, action) => {
    if (action.payload.qty > 1) {
      let auxFilter = state.activeCart.filter(
        (onCart) => onCart.id !== action.payload.id
      );
      state.activeCart = [...auxFilter, action.payload].sort(
        (a, b) => a.id - b.id
      );
    } else
      state.activeCart = [...state.activeCart, action.payload].sort(
        (a, b) => a.id - b.id
      );
  },
  [removeFromCart]: (state, action) => {
    if (action.payload.qty < 1) {
      let auxFilter = state.activeCart.filter(
        (onCart) => onCart.id !== action.payload.id
      );
      state.activeCart = [...auxFilter].sort((a, b) => a.id - b.id);
    } else {
      let auxFilter = state.activeCart.filter(
        (onCart) => onCart.id !== action.payload.id
      );
      state.activeCart = [...auxFilter, action.payload].sort(
        (a, b) => a.id - b.id
      );
    }
  },
  [cancelFromCart]: (state, action) => {
    let auxFilter = state.activeCart.filter(
      (onCart) => onCart.id !== action.payload.id
    );
    state.activeCart = [...auxFilter];
  },
});

export {
  newCart,
  addToCart,
  removeFromCart,
  cancelFromCart,
  saveCart,
  cartsReducer,
};
