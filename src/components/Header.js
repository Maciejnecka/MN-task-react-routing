import React from 'react';
import Nav from './Nav';
import HeaderImg from '../images/headerImage.jpg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__img-box">
        <img className="header__img" src={HeaderImg} alt="Pict here" />
        <h1 className="header__img-description">Routing task blog</h1>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
