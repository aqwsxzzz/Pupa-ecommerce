import { createSlice, current } from "@reduxjs/toolkit";
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
    delProductsByCategory: (state, action) => {
      const arr = state.products.filter((prod) => prod.category._id === action.payload._id);
      arr.forEach((prodToMatch) =>
        state.products.splice(
          state.products.findIndex((prodToDelete) => prodToDelete._id === prodToMatch._id),
          1
        )
      );
    },
    editProductsCategory: (state, action) => {
      let arr = state.products;
      arr.map((prod) => {
        if (prod.category._id === action.payload._id) prod.category.name = action.payload.name;
      });
      state.products = arr;
    },
  },
});

export default productSlice.reducer;
