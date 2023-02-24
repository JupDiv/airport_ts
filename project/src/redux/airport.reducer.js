import { GET_AIRPORT_LIST } from './airport.action';

const initialState = {
  airportList: null,
};

const airportReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AIRPORT_LIST: {
      const { airportList } = action.payload;
      return {
        ...state,
        airportList,
      };
    }
    default:
      return state;
  }
};

export default airportReducer;
