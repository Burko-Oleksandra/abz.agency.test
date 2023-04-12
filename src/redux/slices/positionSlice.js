import { createSlice } from '@reduxjs/toolkit';
import { fetchPositions } from '../thunks';

const setError = (state, { payload }) => {
  state.status = 'rejected';
  state.error = payload;
};

const setPending = state => {
  state.status = 'loading';
  state.error = null;
};

const setPositions = (state, { payload }) => {
  state.positions = [...payload];
};

const positionsSlice = createSlice({
  name: 'positions',
  initialState: {
    positions: [],
    status: null,
    error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchPositions.pending, setPending);
    builder.addCase(fetchPositions.rejected, setError);
    builder.addCase(fetchPositions.fulfilled, setPositions);
  },
});

export const positionsReducer = positionsSlice.reducer;
