import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <header className="header">
      <div className="header__img-box">
        <h1>Image here</h1>
      </div>
      <h1>Image description here</h1>
      <Nav />
    </header>
  );
};

export default Header;
