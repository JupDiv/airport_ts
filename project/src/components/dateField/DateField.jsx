import React, { useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import moment from 'moment';
import pickerDay from '../../utils/pickerDay';
import './datefield.scss';

const DateFiled = ({ onChangeDate, selectDate }) => {
  const [dateParams, setDateParams] = useSearchParams();

  useEffect(() => {
    dateParams.set('date', selectDate);
    setDateParams(dateParams);
  }, [selectDate]);

  const currentDate = dateParams.get('date');

  return (
    <div className="calendar-section">
      <div className="calendar-section__container">
        <div className="calendar-section__calendar">
          <label className="calendar-section__calendar-text" htmlFor="search-date">
            {moment(selectDate).format('DD/MM')}
          </label>
          <i className="fas fa-calendar-days calendar-section__icon"></i>
          <form>
            <input
              className="calendar-section__calendar-item"
              onChange={onChangeDate}
              type="date"
              name="date"
              value={selectDate}
            />
          </form>
        </div>
        <div className="calendar-section__button-container">
          <div className="calendar-section__activity-button">
            <NavLink
              to={`/departures`}
              onClick={e => pickerDay(e, -1, dateParams, setDateParams)}
              className={
                currentDate === moment().add(-1, 'days').format('YYYY-MM-DD')
                  ? `calendar-section__select-dates_active calendar-section__dates-button`
                  : `calendar-section__select-dates calendar-section__dates-button`
              }
            >
              <span className="calendar-section__input-button-date">
                {moment().add(-1, 'days').format('DD/MM')}
              </span>
              <span className="calendar-section__input-button-text">Вчора</span>
            </NavLink>
          </div>
          <div className="calendar-section__activity-button">
            <NavLink
              to={'departures'}
              onClick={e => pickerDay(e, 0, dateParams, setDateParams)}
              className={
                currentDate === moment().format('YYYY-MM-DD')
                  ? `calendar-section__select-dates_active calendar-section__dates-button`
                  : `calendar-section__select-dates calendar-section__dates-button`
              }
            >
              <span className="calendar-section__input-button-date">
                {moment().add(0, 'days').format('DD/MM')}
              </span>
              <span className="calendar-section__input-button-text">Сьогодні</span>
            </NavLink>
          </div>
          <div className="calendar-section__activity-button">
            <NavLink
              to={'departures'}
              onClick={e => pickerDay(e, 1, dateParams, setDateParams)}
              className={
                currentDate === moment().add(1, 'days').format('YYYY-MM-DD')
                  ? `calendar-section__select-dates_active calendar-section__dates-button`
                  : `calendar-section__select-dates calendar-section__dates-button`
              }
            >
              <span className="calendar-section__input-button-date">
                {moment().add(1, 'days').format('DD/MM')}
              </span>
              <span className="calendar-section__input-button-text">Завтра</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateFiled;
