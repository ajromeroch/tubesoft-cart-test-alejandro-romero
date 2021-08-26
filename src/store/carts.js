import {
  createReducer,
  createAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialVal = {
  allCarts: [],
  actualCartId: 0,
  activeCart: null,
};

const newCart = createAction("NEW_CART");
const addToCart = createAction("ADD_TO_CART");
const removeFromCart = createAction("REMOVE_FROM_CART");
const cancelFromCart = createAction("CANCEL_FROM_CART");
const deleteAllCart = createAction("DELETE_ALL_CART");

const getCarts = createAsyncThunk("GET_CARTS", (req, res) => {
  return axios
    .get("http://localhost:3001/api/carts")
    .then((result) => {
      console.log("esto retorna el back en getAll", result.data);
      return result.data;
    })
    .catch((err) => console.log(err));
});

const saveCart = createAsyncThunk("SAVE_CART", (req, res) => {
  return axios
    .post("http://localhost:3001/api/carts", req)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

const updateCart = createAsyncThunk("UDPADTE_CART", (req, res) => {
  const cartUpdate = req[0];
  const id = req[1];
  return axios
    .put(`http://localhost:3001/api/carts/${id}`, cartUpdate)
    .then((res) => res.data)
    .catch((err) => console.log(err));
});

const selectOtherCart = createAsyncThunk("SELECT_OTHER_CART", (req, res) => {
  const { id } = req;
  console.log("llego hasta el selectOtherCart");
  return axios
    .get(`http://localhost:3001/api/carts/${id}`)
    .then((res) => {
      console.log("res.data", res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
});

const removeCartFromDB = createAsyncThunk("REMOVE_CART_FROM_DB", (req, res) => {
  const id = req;
  return axios
    .delete(`http://localhost:3001/api/carts/${id}`)
    .then((res) => {
      console.log("res.delete", res.data);
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
  [deleteAllCart]: (state, action) => {
    state.activeCart = null;
    state.actualCartId = 0;
  },

  [cancelFromCart]: (state, action) => {
    let auxFilter = state.activeCart.filter(
      (onCart) => onCart.id !== action.payload.id
    );
    state.activeCart = [...auxFilter];
  },
  [getCarts.fulfilled]: (state, action) => {
    console.log("este s el action.payload", action.payload);
    console.log("este s el state", state.allCarts);
    state.allCarts = action.payload;
  },
  [selectOtherCart.fulfilled]: (state, action) => {
    state.activeCart = action.payload.allProducts;
    state.actualCartId = action.payload.id;
  },

  [updateCart.fulfilled]: (state, action) => {
    state.activeCart = null;
    state.actualCartId = 0;
  },

  [removeCartFromDB.fulfilled]: (state, action) => {
    state.activeCart = null;
    state.actualCartId = 0;
  },
});

export {
  newCart,
  addToCart,
  removeFromCart,
  cancelFromCart,
  deleteAllCart,
  getCarts,
  saveCart,
  selectOtherCart,
  updateCart,
  removeCartFromDB,
  cartsReducer,
};
