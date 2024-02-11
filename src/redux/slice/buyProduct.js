import { createSlice } from "@reduxjs/toolkit";

export const buyProductSlice = createSlice({
  initialState: [],
  name: "buyProductSlice",
  reducers: {
    addToBuyProduct: (state, action) => {
      state.push(action.payload);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export const { addToBuyProduct, clear } = buyProductSlice.actions;

export default buyProductSlice.reducer;
