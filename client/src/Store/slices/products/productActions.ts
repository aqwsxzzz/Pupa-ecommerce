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
    addNewProduct: (state, action) => {
      state.products.push(action.payload);
    },
    delProduct: (state, action) => {
      state.products.splice(
        state.products.findIndex((elem) => elem._id === action.payload._id),
        1
      );
    },
  },
});

export default productSlice.reducer;
