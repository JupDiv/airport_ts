import moment from 'moment';
import { useSearchParams } from 'react-router-dom';

const checkFlights = (pathName, airportList) => {
  const [params, setParams] = useSearchParams();
  const valueFromSearch = params.get('search');

  const { departure, arrival } = airportList;
  let result =
    pathName === '/departures' || pathName === '/'
      ? departure.map(flight => {
          return {
            id: flight.ID,
            term: flight.term,
            shedule: moment(flight.timeDepShedule).format('HH:mm'),
            city: flight['airportToID.city_en'],
            timeTake: moment(flight.timeTakeofFact).format('HH:mm'),
            name: flight.airline.en.name,
            logo: flight.airline.en.logoSmallName,
            carrierID: flight['carrierID.IATA']
              ? `${flight['carrierID.IATA']}${flight.fltNo}`
              : `${flight['carrierID.code']}${flight.fltNo}`,
          };
        })
      : arrival.map(flight => {
          return {
            id: flight.ID,
            term: flight.term,
            shedule: moment(flight.timeStandCalc).format('HH:mm'),
            city: flight['airportFromID.city_en'],
            timeTake: moment(flight.timeStandFact).format('HH:mm'),
            logo: flight.airline.en.logoSmallName,
            name: flight.airline.en.name,
            carrierID: flight['carrierID.IATA']
              ? `${flight['carrierID.IATA']}${flight.fltNo}`
              : `${flight['carrierID.code']}${flight.fltNo}`,
          };
        });

  if (valueFromSearch) {
    result = result.filter(flight =>
      flight.carrierID.toLowerCase().includes(valueFromSearch.toLowerCase()),
    );
  }

  return result;
};

export default checkFlights;
