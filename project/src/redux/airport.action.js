import fetchData from '../utils/getSearchGetway';

export const GET_AIRPORT_LIST = 'AIRPORT/GET_LIST';

export const getAirportList = airportList => {
  return {
    type: GET_AIRPORT_LIST,
    payload: {
      airportList,
    },
  };
};

export const getData = date => {
  return function (dispatch) {
    fetchData(date).then(airportList => dispatch(getAirportList(airportList)));
  };
};
