import { combineReducers } from "@reduxjs/toolkit";

import productsSlice from "./slices/products/productActions";
import categoriesSlice from "./slices/categories/categoryActions";

const rootReducer = combineReducers({
  categoriesSlice,
  productsSlice,
});

export default rootReducer;
