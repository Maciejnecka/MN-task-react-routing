import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Posts from '../Posts';

const PostsByDate = ({ postsList }) => {
  const { year, month } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    setCurrentPage(1);
  }, [year, month]);

  const filteredPosts = postsList.filter((post) => {
    const postDate = new Date(post.date);
    return (
      postDate.getFullYear() === parseInt(year, 10) &&
      postDate.getMonth() + 1 === parseInt(month, 10)
    );
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (filteredPosts.length === 0) {
    return <Navigate to="/not-found" />;
  }

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Posts postsList={currentPosts} />
      {filteredPosts.length > postsPerPage && (
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? 'active' : ''
                }`}
              >
                <button
                  onClick={() => handleClick(number)}
                  className="page-link"
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default PostsByDate;
