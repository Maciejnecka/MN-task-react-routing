import React from 'react';
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';
import Posts from '../components/Posts';
import { posts } from '../data/posts';
import PostsByCategory from '../components/PostsByCategory';
import Footer from '../components/Footer';
import NotFound from './NotFound';

const HomePage = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Posts postsList={posts} />} />
        <Route path="/category" element={<Posts postsList={posts} />} />
        <Route
          path="/category/:category"
          element={<PostsByCategory postsList={posts} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default HomePage;
