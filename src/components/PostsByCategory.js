import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from './Pagination';
import { useParams } from 'react-router-dom';

const PostsByCategory = ({ postsList, postsPerPage = 3 }) => {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const postsByCategory = postsList.filter(
      (post) => post.category === category
    );
    setFilteredPosts(postsByCategory);
    setCurrentPage(1);
  }, [category, postsList]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Posts postsList={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filteredPosts.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </>
  );
};

export default PostsByCategory;
