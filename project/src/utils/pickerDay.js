import moment from 'moment';

const switcherDate = moment().format('YYYY-MM-DD');
const pickerDay = (event, day, dateParams, setDateParams) => {
  event.preventDefault();
  dateParams.set('date', moment(switcherDate).add(day, 'days').format('YYYY-MM-DD'));
  setDateParams(dateParams);
};

export default pickerDay;

// const switcherDate = moment().format('YYYY-MM-DD');

// const handlerYestaday = e => {
//   e.preventDefault();
//   dateParams.set('date', moment(switcherDate).add(-1, 'days').format('YYYY-MM-DD'));
//   setDateParams(dateParams);
// };

// const handlerToday = e => {
//   e.preventDefault();
//   dateParams.set('date', moment(switcherDate).add(0, 'days').format('YYYY-MM-DD'));
//   setDateParams(dateParams);
// };
// const handlerTomorrow = e => {
//   e.preventDefault();
//   dateParams.set('date', moment(switcherDate).add(1, 'days').format('YYYY-MM-DD'));
//   setDateParams(dateParams);
// };
