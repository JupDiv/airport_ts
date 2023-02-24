import React from 'react';
import './header.scss';

const Header = () => {
  const headerList = [
    { id: 1, name: 'Пасажирам' },
    { id: 2, name: 'Послуги IEV' },
    { id: 3, name: 'VIP' },
    { id: 4, name: 'Партнерам' },
    { id: 5, name: 'Пресцентр' },
    { id: 6, name: 'UA' },
  ];
  return (
    <header className="header">
      <div className="header__logo"></div>
      <ul className="header__list">
        {headerList.map(({ id, name }) => (
          <li className="header__list-element" key={id}>
            <span className="header__list-text">{name}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
