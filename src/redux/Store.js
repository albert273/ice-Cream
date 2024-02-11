import { configureStore } from "@reduxjs/toolkit";
import  productCartSlice  from "./slice/SliceToCart";
import productSlice from "./slice/ProductSlice"
import favoriteCartSlice from "./slice/favoretSlice"
import buyProductSlice from "./slice/buyProduct"
export const Store = configureStore({
    reducer: {
        // @ts-ignore
        cart: productCartSlice,
        products: productSlice,
        favorite: favoriteCartSlice,
        buy: buyProductSlice
    }
})