import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    value: [],
  },

  reducers: {
    addPost: (state, actions) => {},
  },
});
