import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  itemCount: {},
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      let elementPresent = state.cart.some(
        (el) => el?.id === action.payload.id
      );
      if (elementPresent) {
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    },
    remove(state, action) {
      return {
        ...state,
        cart: [...state.cart].filter((item) => item.id !== action.payload),
      };
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;

      if (quantity > 0) {
        return {
          ...state,
          itemCount: {
            ...state.itemCount,
            [id]: quantity,
          },
          cartCount: Object.values({
            ...state.itemCount,
            [id]: quantity, // Calculate the new itemCount temporarily
          }).reduce((sum, count) => sum + count, 0),
        };
      } else {
        let deletedItem = { ...state.itemCount };
        delete deletedItem[id];
        return {
          ...state,
          itemCount: deletedItem,
          cartCount: Object.values(deletedItem).reduce(
            (sum, count) => sum + count,
            0
          ),
        };
      }
    },
  },
});
export const { add, remove, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
