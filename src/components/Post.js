import React from 'react';

const Post = ({ post }) => {
  return (
    <li className="post__item">
      <div className="post__item--header">
        <h3 className="post__item--title">{post.title}</h3>
        <p className="post__item--date">{post.date}</p>
      </div>
      <p className="post__item--intro">{post.intro}</p>
      <p className="post__item--readmore">Read more...</p>
    </li>
  );
};

export default Post;
