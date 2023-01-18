import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        'https://63c83c875c0760f69ac83edb.mockapi.io/contacts/abzagency?page=1&limit=6'
      );

      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async function (
    { name, avatar, email, phone, position },
    { rejectWithValue }
  ) {
    try {
      const contact = {
        name,
        avatar,
        email,
        phone,
        position,
      };

      const response = await fetch(
        'https://63c83c875c0760f69ac83edb.mockapi.io/contacts/abzagency',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      );

      if (!response.ok) {
        throw new Error("Can't add contact. Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
