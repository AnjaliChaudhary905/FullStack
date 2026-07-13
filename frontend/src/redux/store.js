import { configureStore} from '@reduxjs/toolkit'
import authReducer from '../redux/features/authSlice.js';
import cartReducer from '../redux/features/cartSlice.js';
export const store = configureStore({
  reducer: {
    auth:authReducer,
    cart:cartReducer,
  },
})