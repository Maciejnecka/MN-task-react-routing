import React, { useState } from 'react';
import Posts from '../Posts';
import Pagination from './Pagination';

const PaginatedPosts = ({ postsList, postsPerPage = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Posts postsList={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={postsList.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default PaginatedPosts;
