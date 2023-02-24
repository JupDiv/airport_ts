import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchFlight.scss';

const SearchForm = () => {
  const [params, setParams] = useSearchParams();
  const handlerSearchParams = event => {
    event.preventDefault();
    params.set('search', event.target.search.value);
    setParams(params);
  };

  return (
    <section className="main-search">
      <div className="main-search__container">
        <div className="main-search__active-block">
          <h2 className="main-search__title">Пошук рейсів</h2>
          <div className="main-search__search-line-container">
            <i className="fa-solid fa-magnifying-glass main-search__search-icon"></i>
            <form onSubmit={handlerSearchParams} className="main-search__search-input" action="">
              <input
                className="main-search__input-element"
                type="text"
                placeholder="Номер рейсу"
                defaultValue={params.get('search')}
                name={'search'}
              />
              <button className="main-search__input-button" type="submit">
                Знайти
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
