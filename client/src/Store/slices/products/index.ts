import { createSlice } from "@reduxjs/toolkit";
import { ProductsProps } from "Utils/Interfaces";

interface initialProdState {
  products: ProductsProps[];
}

const initialState: initialProdState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload.products;
    },
  },
});

export default productSlice.reducer;
