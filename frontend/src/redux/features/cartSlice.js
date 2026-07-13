import { createSlice } from "@reduxjs/toolkit";

// Storage Helpers
const getStorageKey = (user) =>
  user?._id ? `cart_${user._id}` : "cart";

const loadCart = (user) => {
  return JSON.parse(localStorage.getItem(getStorageKey(user))) || [];
};

const saveCart = (user, cartItems) => {
  localStorage.setItem(getStorageKey(user), JSON.stringify(cartItems));
};

const initialState = {
  user: null,
  cartItems: loadCart(null),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Load user's cart after login
    setUserCart: (state, action) => {
      const user = action.payload?.user || action.payload;

      if (!user?._id) return;

      state.user = user;

      const userCart = loadCart(user);
      const guestCart = loadCart(null);

      // Merge guest cart with user cart
      const mergedCart = [...userCart];

      guestCart.forEach((guestItem) => {
        const existingItem = mergedCart.find(
          (item) => item._id === guestItem._id
        );

        if (existingItem) {
          existingItem.quantity += guestItem.quantity;
        } else {
          mergedCart.push(guestItem);
        }
      });

      state.cartItems = mergedCart;

      saveCart(user, mergedCart);

      // Remove guest cart after merging
      localStorage.removeItem("cart");
    },

    // Logout
    clearCartOnLogout: (state) => {
      state.user = null;
      state.cartItems = [];
    },

    // Add item
    add: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }

      saveCart(state.user, state.cartItems);
    },

    // Decrease quantity
    sub: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      }

      saveCart(state.user, state.cartItems);
    },

    // Remove item completely
    remove: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );

      saveCart(state.user, state.cartItems);
    },

    // Clear cart
    clearCart: (state) => {
      state.cartItems = [];
      saveCart(state.user, []);
    },
  },
});

export const {
  add,
  sub,
  remove,
  clearCart,
  setUserCart,
  clearCartOnLogout,
} = cartSlice.actions;

export default cartSlice.reducer;