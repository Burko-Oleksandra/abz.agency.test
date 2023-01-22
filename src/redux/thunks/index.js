import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL, USERS_LIMIT } from 'constants';

axios.defaults.baseURL = API_URL;

export const fetchFirstVisibleContacts = createAsyncThunk(
  'contacts/fetchFirstVisibleContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/abzagency?page=1&limit=${USERS_LIMIT}`
      );

      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/abzagency?page=${page}&limit=${USERS_LIMIT}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addNewContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/abzagency', newContact);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
