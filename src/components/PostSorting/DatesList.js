import React from 'react';
import { Link } from 'react-router-dom';

const DatesList = ({ posts }) => {
  const dates = [
    ...new Set(
      posts.map((post) => {
        const date = new Date(post.date);
        return `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
          2,
          '0'
        )}`;
      })
    ),
  ];

  return (
    <ul>
      {dates.map((date) => (
        <li key={date}>
          <Link to={`/date/${date.replace('/', '/')}`}>{date}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DatesList;
