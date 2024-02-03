import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Posts from './Posts';

const PostsByCategory = ({ postsList }) => {
  const { category } = useParams();

  let filteredPosts = postsList.filter((post) => post.category === category);

  if (filteredPosts.length === 0) {
    return <Navigate to="/not-found" />;
  }

  filteredPosts = postsList.filter((item) => {
    return item.category.toLowerCase() === category.toLowerCase();
  });

  return <Posts postsList={filteredPosts} />;
};

export default PostsByCategory;
