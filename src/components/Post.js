import React from 'react';

const Post = ({ postsList }) => {
  const posts = postsList.map((item) => (
    <li className="posts__item" key={item.id}>
      <h3 className="post__item--title">{item.title}</h3>
      <p>{item.intro}</p>
      <p>Read more...</p>
    </li>
  ));

  return <ul>{posts}</ul>;
};

export default Post;
