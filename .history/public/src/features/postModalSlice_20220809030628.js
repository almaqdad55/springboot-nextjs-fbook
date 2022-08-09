import { createSlice } from '@reduxjs/toolkit';

export const postModalSlice = createSlice({
  name: 'postModal',
  initialState: {
    modalState: true,
  },
  reducers: {
    togglePostModal: (state) => {
      state = !state;
    },
  },
});

export const { togglePostModal } = postModalSlice.actions;
export default postModalSlice.reducer;
