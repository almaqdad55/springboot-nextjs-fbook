import { createSlice } from '@reduxjs/toolkit';

export const postModalSlice = createSlice({
  name: 'postModal',
  initialState: {
    modalState: false,
  },
  reducers: {
    togglePostModal: (state) => {
      state.modalState = !state.modalState;
    },
  },
});

export const { togglePostModal } = postModalSlice.actions;
export default postModalSlice.reducer;
