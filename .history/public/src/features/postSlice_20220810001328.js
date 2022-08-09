import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    value: [],
  },

  reducers: {
    addPost: (state, actions) => {},
    addAllPost: (stata, action) => {},
  },
});

export const { addPost, addAllPost } = postSlice.actions;
export default postSlice.reducer;
