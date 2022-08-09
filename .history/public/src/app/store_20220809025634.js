import { configureStore } from '@reduxjs/toolkit';
import postmodalReducer from '../../src/features/postModalSlice';

export default configureStore({
  reducer: {
    postModal: postmodalReducer,
  },
});
