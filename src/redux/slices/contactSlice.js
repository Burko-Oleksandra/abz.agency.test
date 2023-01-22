import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFirstVisibleContacts,
  fetchContacts,
  addNewContact,
} from '../thunks';

const setError = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const setPending = state => {
  state.status = 'loading';
  state.error = null;
};

const setFirstVisibleContacts = (state, { payload }) => {
  state.status = 'resolved';
  state.contacts = payload;
};

const setContacts = (state, { payload }) => {
  state.contacts = [...state.contacts, ...payload];
};

const addContact = (state, { payload }) => {
  state.status = 'resolved';
  state.contacts.unshift(payload);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: null,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchFirstVisibleContacts.pending, setPending);
    builder.addCase(fetchFirstVisibleContacts.rejected, setError);
    builder.addCase(
      fetchFirstVisibleContacts.fulfilled,
      setFirstVisibleContacts
    );

    builder.addCase(fetchContacts.pending, setPending);
    builder.addCase(fetchContacts.rejected, setError);
    builder.addCase(fetchContacts.fulfilled, setContacts);

    builder.addCase(addNewContact.pending, setPending);
    builder.addCase(addNewContact.rejected, setError);
    builder.addCase(addNewContact.fulfilled, addContact);
  },
});

export const contactsReducer = contactsSlice.reducer;
