import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import moment from 'moment';
import FlightsNotFound from '../FlightsNotFound/FlightsNotFound';
import SwitcherFlight from '../switcherFlight/SwitcherFlight';
import DateField from '../dateField/DateField';
import { getData } from '../../redux/airport.action';
import airportList from '../../redux/airport.selectors';
import ResultTable from '../resultTable/ResultTable';
import './resultSection.scss';

const ResultSection = ({ getAirportList, searchList }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectDate = searchParams.get('date') || moment().format('YYYY-MM-DD');

  const handlerChangeDate = event => {
    event.preventDefault();
    searchParams.set('date', event.target.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    getAirportList(selectDate);
  }, [selectDate]);

  if (!searchList) {
    return null;
  }

  return (
    <div className="result-section">
      <SwitcherFlight selectDate={selectDate} />
      <DateField onChangeDate={handlerChangeDate} selectDate={selectDate} />
      {searchList.body.departure.length === 0 ? (
        <FlightsNotFound />
      ) : (
        <ResultTable searchList={searchList.body} date={selectDate} />
      )}
    </div>
  );
};

const mapState = state => {
  return {
    searchList: airportList(state),
  };
};

const mapDispatch = {
  getAirportList: getData,
};

ResultSection.propTypes = {
  getAirportList: propTypes.func.isRequired,
  searchList: propTypes.object,
};

const connector = connect(mapState, mapDispatch);

export default connector(ResultSection);
