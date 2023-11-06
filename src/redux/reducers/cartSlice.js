import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const product = action.payload;
      const additem = state.find((item) => item.id === product.id);
      if (additem) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    },

    deleteCartItem: (state, action) => {
      const product = action.payload;
      const deleteitem = state.find((item) => item.id === product.id);
      if (deleteitem.qty === 1) {
        return state.filter((item) => item.id !== deleteitem.id);
      } else {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    },

    removeCartItem: (state,action) =>{
      const product = action.payload;
      const deleteitem = state.find((item) => item.id === product.id);
      if(deleteitem)
      {
        return state.filter((item) => item.id !== deleteitem.id);
      }
    }
  },
});

export const cartItem = (state) => state.cart

export const {addCartItem,deleteCartItem,removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;