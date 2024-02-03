import React from 'react';
import Post from './Post';

const Posts = ({ postsList }) => {
  return (
    <ul className="posts__list">
      <Post postsList={postsList} />
    </ul>
  );
};

export default Posts;
