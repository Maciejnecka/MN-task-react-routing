import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    const slugifiedTitle = post.title
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');

    navigate(`/category/${post.category}/${slugifiedTitle}`);
  };

  return (
    <li className="post__item">
      <div className="post__item--header">
        <h3 className="post__item--title">{post.title}</h3>
        <p className="post__item--date">{post.date}</p>
      </div>
      <p className="post__item--intro">{post.intro}</p>
      <p className="post__item--readmore" onClick={handleReadMoreClick}>
        Read more...
      </p>
    </li>
  );
};

export default Post;
