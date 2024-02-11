import { createSlice } from "@reduxjs/toolkit";
import { iceCreamItem } from "../../components/main/Data";

export const productSlice = createSlice({
  initialState: iceCreamItem,
  name: "productSlice",
  reducers: {
    addToProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addToProduct } = productSlice.actions;

export default productSlice.reducer;
