import { configureStore } from '@reduxjs/toolkit';
import postmodalReducer from '../../src/features/postModalSlice';
import { postReducer } from '../../src/features/postSlice';

export default configureStore({
  reducer: {
    postModal: postmodalReducer,
    post: postReducer,
  },
});
