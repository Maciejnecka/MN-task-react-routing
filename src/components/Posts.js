import React from 'react';
import Post from './Post';

const Posts = ({ postsList }) => {
  return (
    <ul className="posts__list">
      {postsList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
