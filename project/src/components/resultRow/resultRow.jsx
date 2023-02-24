import React, { useState } from 'react';

import './resultRow.scss';

const ResultRow = ({ term, shedule, city, timeTake, name, carrierID, logo }) => {
  const [detailFlight, setCursor] = useState(false);

  const test = {
    opacity: 1,
  };
  return (
    <tr
      onMouseEnter={() => setCursor(true)}
      onMouseLeave={() => setCursor(false)}
      className="table-body-element"
    >
      <td className="table-body-element__item">
        <span
          className={
            term === 'A'
              ? 'table-body-element__term'
              : 'table-body-element__term table-body-element__term_other-terminal'
          }
        >
          {term}
        </span>
      </td>
      <td className="table-body-element__item">{shedule}</td>
      <td className="table-body-element__item">
        {' '}
        <span>{city}</span>{' '}
      </td>
      <td className="table-body-element__item">Вилетів о {timeTake}</td>
      <td className="table-body-element__item">
        <div className="table-body-element__logo">
          <img className="table-body-element__logo-img" src={logo} alt="logo" />
          <span className="table-body-element__logo-text">{name}</span>
        </div>
      </td>
      <td className="table-body-element__item">{carrierID}</td>
      <td style={detailFlight ? test : null} className="table-body-element__item">
        <span className="table-body-element__text">Деталі рейсу</span>
      </td>
    </tr>
  );
};

export default ResultRow;
