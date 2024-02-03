import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Nav = () => {
  const categories = [
    { text: 'All posts', url: '/' },
    { text: 'Posts firstCat', url: '/category/firstCat' },
    { text: 'Posts secondCat', url: '/category/secondCat' },
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
