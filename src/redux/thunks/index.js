import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL, USERS_LIMIT } from 'constants';

axios.defaults.baseURL = API_URL;

export const fetchFirstVisibleContacts = createAsyncThunk(
  '/users/fetchFirstVisibleContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/users?page=1&count=${USERS_LIMIT}`);
      return response.data.users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  '/users/fetchContacts',
  async (page = 1, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/users?page=${page}&count=${USERS_LIMIT}`
      );

      return response.data.users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  '/users/addNewContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/token`);
      const getToken = res.data.token;
      const response = await axios.post(`/users`, newContact, {
        headers: { 'content-type': 'multipart/form-data', token: getToken },
      });
      const newData = {
        name: newContact.name,
        email: newContact.email,
        phone: newContact.phone,
        photo: newContact.photo.name,
        id: response.data.user_id,
      };
      return newData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPositions = createAsyncThunk(
  '/positions/fetchPositions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/positions`);
      return data.positions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getToken = createAsyncThunk(
  '/token/getToken',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/token`);
      return data.token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
