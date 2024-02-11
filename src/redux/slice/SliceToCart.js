import { createSlice } from "@reduxjs/toolkit";

export const productCartSlice = createSlice({
  initialState: [],
  name: "productCartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clear } = productCartSlice.actions;
export default productCartSlice.reducer;
