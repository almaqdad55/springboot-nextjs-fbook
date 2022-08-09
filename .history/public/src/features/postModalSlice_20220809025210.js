import { createSlice } from '@reduxjs/toolkit';

export const postModalSlice = createSlice({
  name: 'postModal',
  initialState: false,
  reducers: {
    togglePostModal: (state) => {
      state = !state;
    },
  },
});

export const { togglePostModal } = postModalSlice.actions;
export default postModalSlice.reducer;
