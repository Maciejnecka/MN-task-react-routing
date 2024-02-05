// views/HomePage.js
import React from 'react';
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';
import Posts from '../components/Posts';
import { posts } from '../data/posts';
import { PrismicProvider } from '@prismicio/react';
import { client } from '../providers/prismic';
import PaginatedPosts from '../components/Pagination/PaginatedPosts';
import PostsByCategory from '../components/PostSorting/PostsByCategory';
import PostsByDate from '../components/PostSorting/PostsByDate';
import Footer from '../components/Footer';
import NotFound from './NotFound';

const HomePage = () => {
  return (
    <PrismicProvider client={client}>
      <Header />
      <Routes>
        <Route path="/" element={<PaginatedPosts postsList={posts} />} />

        <Route path="/category" element={<Posts postsList={posts} />} />
        <Route
          path="/category/:category"
          element={<PostsByCategory postsList={posts} />}
        />
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
