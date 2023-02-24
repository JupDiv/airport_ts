// export const arrivalListSelector = state => {
//   return state.airportList.airportList.arrival;
// };
// export const departurelListSelector = state => {
//   return state.airportList.departure;
// };
const airportList = state => {
  return state.searchList.airportList;
};

export default airportList;
