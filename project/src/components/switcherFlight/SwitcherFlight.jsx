import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import './switcherflight.scss';

const SwitcherFlight = ({ selectDate }) => {
  const selectStyle = {
    zIndex: 3,
    backgroundColor: '#fff',
    color: '#1eb7ee',
  };

  return (
    <ul className="nav-list">
      <div className="nav-list__container">
        <li className="nav-list__item">
          <NavLink
            style={({ isActive }) => (isActive ? selectStyle : undefined)}
            className="nav-list__link"
            to={`/departures?date=${selectDate}`}
          >
            <i className="fas fa-plane-departure nav-list__icon"></i>
            <span className="nav-list__text">Виліт</span>
          </NavLink>
        </li>

        <li className="nav-list__item">
          <NavLink
            style={({ isActive }) => (isActive ? selectStyle : undefined)}
            className="nav-list__link"
            to={`/arrivals?date=${selectDate}`}
          >
            <i className="fas fa-plane-arrival nav-list__icon"></i>
            <span className="nav-list__text">Приліт</span>
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

SwitcherFlight.propTypes = {
  selectDate: propTypes.string.isRequired,
};

export default SwitcherFlight;
