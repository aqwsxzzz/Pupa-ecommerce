import { combineReducers } from "@reduxjs/toolkit";

import productsSlice from "./slices/products";

const rootReducer = combineReducers({
  productsSlice,
});

export default rootReducer;
