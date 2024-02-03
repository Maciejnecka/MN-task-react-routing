import React from 'react';

const Post = ({ post }) => {
  return (
    <li className="posts__item">
      <h3 className="post__item--title">{post.title}</h3>
      <p>{post.intro}</p>
      <p>Read more...</p>
    </li>
  );
};

export default Post;
