import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: null,
    currency: null,
    items: [],
  },
  reducers: {
    setItems: (state, action) => {
      // console.log(action.payload.items)
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice
      state.currency = action.payload.currency
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    incrementItemQuantity: (state, action) => {
      const { productId, variantId } = action.payload;


      state.items = state.items.map((item) => {
        if (item.product._id === productId && item.variant === variantId) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });

    },
    decrementItemQuantity: (state, action) => {
      const { productId, variantId } = action.payload;

      state.items = state.items.map((item) => {
        if (item.product._id === productId && item.variant === variantId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
    },
  },
});

export const { setItems, addItem, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;
