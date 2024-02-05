import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

const PostDetail = () => {
  let { category, title } = useParams();
  const navigate = useNavigate();
  title = decodeURIComponent(title);

  const post = posts.find(
    (p) => p.category === category && slugify(p.title) === title
  );

  if (!post) {
    return <div>Post not found</div>;
  }

  const goBack = () => navigate(-1);

  return (
    <div className="post-detail">
      <h1 className="post-detail__title">{post.title}</h1>
      <p className="post-detail__intro">{post.intro}</p>
      <p className="post-detail__text">{post.text}</p>
      <button onClick={goBack} className="post-detail--go-back-button">
        Go back
      </button>
    </div>
  );
};

export default PostDetail;
