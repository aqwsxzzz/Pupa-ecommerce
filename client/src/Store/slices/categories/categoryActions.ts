import { createSlice } from "@reduxjs/toolkit";
import { CategoriesProps } from "Utils/Interfaces";

interface initialCatState {
  categories: CategoriesProps[];
}

const initialState: initialCatState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
