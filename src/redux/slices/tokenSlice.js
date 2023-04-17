// import { createSlice } from '@reduxjs/toolkit';
// import { getToken } from '../thunks';

// const setError = (state, { payload }) => {
//   state.status = 'rejected';
//   state.error = payload;
// };

// const setPending = state => {
//   state.status = 'loading';
//   state.error = null;
// };

// const setToken = (state, { payload }) => {
//   state.token = payload;
// };

// const tokenSlice = createSlice({
//   name: 'token',
//   initialState: {
//     token: null,
//     status: null,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder.addCase(getToken.pending, setPending);
//     builder.addCase(getToken.rejected, setError);
//     builder.addCase(getToken.fulfilled, setToken);
//   },
// });

// export const tokenReducer = tokenSlice.reducer;
