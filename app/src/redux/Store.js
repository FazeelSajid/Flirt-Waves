import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/AuthSlice'; // Corrected import

const store = configureStore({
  reducer: {
    auth: authReducer, // Updated reducer name
  },
});

export default store;
