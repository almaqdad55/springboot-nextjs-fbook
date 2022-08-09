import { configureStore } from '@reduxjs/toolkit';
import postModalSlice from '../features/postModalSlice';
export default configureStore({
  reducers: {
    postModal: postmodalReducer,
  },
});
