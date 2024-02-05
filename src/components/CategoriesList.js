import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesList = ({ posts }) => {
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <Link to={`/category/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;
