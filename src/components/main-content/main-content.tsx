import React from 'react';
import { PackagesList } from 'components/packages-list';
import { SearchBar } from 'components/search-bar';
import './main-content.scss';

export const MainContent = () => {
  return (
    <section className="main-content">
      <div className="main-content__box">
        <SearchBar />
        <PackagesList />
      </div>
    </section>
  );
};
