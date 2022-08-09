import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducers: {
    postModal: postmodalReducer,
  },
});
