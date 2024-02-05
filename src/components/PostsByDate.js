import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Posts from './Posts';

const PostsByDate = ({ postsList }) => {
  const { year, month } = useParams();
  const filteredPosts = postsList.filter((post) => {
    const postDate = new Date(post.date);
    return (
      postDate.getFullYear() === parseInt(year, 10) &&
      postDate.getMonth() + 1 === parseInt(month, 10)
    );
  });

  if (filteredPosts.length === 0) {
    return <Navigate to="/not-found" />;
  }

  return <Posts postsList={filteredPosts} />;
};

export default PostsByDate;
