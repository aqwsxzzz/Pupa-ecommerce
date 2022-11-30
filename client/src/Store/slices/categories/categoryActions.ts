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
    addNewCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    delCategory: (state, action) => {
      state.categories.splice(
        state.categories.findIndex((elem) => elem._id === action.payload._id),
        1
      );
    },
  },
});

export default categoriesSlice.reducer;
