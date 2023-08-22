import { createSlice } from '@reduxjs/toolkit';
import bookContacts from '../data/bookContacts';

const initialState = {
  contacts: bookContacts.contacts,
  // JSON.parse(window.localStorage.getItem('contacts')) ??
  // bookContacts.contacts,
  filter: '',
};

const contactsStorageSlice = createSlice({
  name: 'contactsStorage',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, setFilter } =
  contactsStorageSlice.actions;
export const contactsStorageReducer = contactsStorageSlice.reducer;