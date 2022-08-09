import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPost } from '../public/src/features/postSlice';
import Post from './Post';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPost);
  return (
    <div>
      <Post />
    </div>
  );
};

export default Posts;
