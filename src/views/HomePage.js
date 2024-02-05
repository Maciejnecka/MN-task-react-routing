// views/HomePage.js
// import React, { useEffect, useState } from 'react';
import React from 'react';
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';
import Posts from '../components/Posts';
import { PrismicProvider } from '@prismicio/react';
import { client } from '../providers/prismic';
import { posts } from '../data/posts';
// import { predicate } from '@prismicio/client'; //
import PaginatedPosts from '../components/Pagination/PaginatedPosts';
import PostsByCategory from '../components/PostSorting/PostsByCategory';
import PostsByDate from '../components/PostSorting/PostsByDate';
import Footer from '../components/Footer';
import NotFound from './NotFound';
import DatesList from '../components/PostSorting/DatesList';
import PostDetail from '../components/PostDetail';

const HomePage = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await client.get({
  //       predicates: [predicate.at('document.type', 'posts')],
  //       options: { pageSize: 100 },
  //     });
  //     setPosts(response.results);
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <PrismicProvider client={client}>
      <Header />
      <DatesList posts={posts} />
      <Routes>
        <Route path="/" element={<PaginatedPosts postsList={posts} />} />

        <Route path="/category" element={<Posts postsList={posts} />} />
        <Route
          path="/category/:category"
          element={<PostsByCategory postsList={posts} />}
        />
        <Route path="/category/:category/:title" element={<PostDetail />} />
        <Route
          path="/date/:year/:month"
          element={<PostsByDate postsList={posts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </PrismicProvider>
  );
};

export default HomePage;
