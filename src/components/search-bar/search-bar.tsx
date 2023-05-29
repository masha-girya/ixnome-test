import React from 'react';
import { Icon } from 'components/icon';
import { useSearchBar } from './search-bar.state';
import './search-bar.scss';

export const SearchBar = () => {
  const { query, handleChangeQuery } = useSearchBar();

  return (
    <div className="search-bar">
      <label className="search-bar__box">
        <Icon type="loupe" />

        <input
          type="text"
          placeholder="Search package, client or courier"
          className="search-bar__input"
          value={query}
          onChange={handleChangeQuery}
        />
      </label>
    </div>
  );
};
