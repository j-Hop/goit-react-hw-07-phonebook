import { configureStore } from '@reduxjs/toolkit';
import { contactsStorageReducer } from './contactsStorageReducer';

export const store = configureStore({
  reducer: {
    contactsStorage:
      contactsStorageReducer,
  },

});