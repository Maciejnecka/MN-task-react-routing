import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Nav = () => {
  const categories = [
    { text: 'All flowers', url: '/' },
    { text: 'Home flowers', url: '/category/garden' },
    { text: 'Garden flowers', url: '/category/home' },
  ].map((item) => ({ ...item, id: uuidv4() }));

  const activeClass = 'active--category';

  const nav = categories.map((item) => {
    return (
      <li key={item.id} className="nav__item">
        <NavLink
          className={({ isActive }) =>
            isActive ? `nav__item__link ${activeClass}` : 'nav__item__link'
          }
          to={item.url}
        >
          {item.text}
        </NavLink>
      </li>
    );
  });
  return (
    <nav>
      <ul className="header__nav__list">{nav}</ul>
    </nav>
  );
};

export default Nav;
