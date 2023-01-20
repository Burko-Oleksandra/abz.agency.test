import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addNewContact } from '../thunks';

const setError = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const setPending = state => {
  state.status = 'loading';
  state.error = null;
};

const setfulfilled = (state, { payload }) => {
  state.status = 'resolved';
  console.log(state.contacts, payload);
  state.contacts = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: null,
    error: null,
  },
  reducers: {
    setContacts: (state, { payload }) => {
      console.log(state.contacts);
      // state.contacts = [...state.contacts, ...payload];
      state.contacts.concat(payload);
      console.log(state.contacts);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, setPending);
    builder.addCase(fetchContacts.fulfilled, setfulfilled);
    builder.addCase(fetchContacts.rejected, setError);

    builder.addCase(addNewContact.pending, setPending);
    builder.addCase(addNewContact.fulfilled, (state, { payload }) => {
      state.status = 'resolved';
      state.contacts.unshift(payload);
    });
    builder.addCase(addNewContact.rejected, setError);
  },
});

export const contactsReducer = contactsSlice.reducer;
