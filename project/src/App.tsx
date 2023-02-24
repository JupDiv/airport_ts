import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import SearchPage from './components/searchPage/SearchPage';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
