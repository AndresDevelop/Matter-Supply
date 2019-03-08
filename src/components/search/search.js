import React, { useState, useContext } from 'react';
import { getGitsUser } from '../../api/api';
import { FetchAllGists, ErrorFetch } from '../store/actions';
import StoreContext from '../store/context';

import '../../styles/components/_search.scss';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const context = useContext(StoreContext);
  const { dispatch } = context;
  const { placeholder, searchChild } = props;
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };
  const callSearchFunction = (e) => {
    e.preventDefault();
    searchChild(searchValue);
    getGitsUser(searchValue)
      .then(({ data }) => {
        dispatch(FetchAllGists(data));
      })
      .catch((error) => {
        dispatch(ErrorFetch(error));
      });
  };
  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder={placeholder}
      />
      <button type="button" onClick={callSearchFunction}>
        <span>Search</span>
      </button>
    </form>
  );
};
export default Search;
