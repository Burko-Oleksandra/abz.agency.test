import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactSlice';
import { positionsReducer } from './slices/positionSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    positions: positionsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
