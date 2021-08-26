import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialVal = {
  allProducts: [],
};

const getAllProducts = createAsyncThunk("ALL_PRODUCTS", () => {
  return axios
    .get("http://localhost:3001/api/products")
    .then((res) => res.data)
    .catch((err) => err);
});

const productsReducer = createReducer(initialVal, {
  [getAllProducts.fulfilled]: (state, action) => {
    state.allProducts = action.payload;
  },
});

export { getAllProducts, productsReducer };
