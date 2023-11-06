import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/reducers/cartSlice'

export const store = configureStore({
    reducer:{
        cart : cartReducer
    }
})