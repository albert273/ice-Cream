import { createSlice } from "@reduxjs/toolkit";

export const favoriteCartSlice = createSlice({
  initialState: [],
  name: "favoriteCartSlice",
  reducers: {
    addToFavorite: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromFavorite: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearFavorite: (state, action) => {
      return [];
    },
  },
});

export const { addToFavorite, deleteFromFavorite, clearFavorite } =
  favoriteCartSlice.actions;
export default favoriteCartSlice.reducer;
