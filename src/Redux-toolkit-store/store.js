import { configureStore, createReducer } from "@reduxjs/toolkit";

import cartReducer from "./createSlice";
import productReducer from "./productSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default Store;
