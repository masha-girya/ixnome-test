import React from 'react';
import { MainContent } from 'components/main-content';
import { Sidebar } from 'components/sidebar';
import './main.scss';

export const Main = () => {
  return (
    <main className="main">
      <div className="main__box">
        <Sidebar />
        <MainContent />
      </div>
    </main>
  );
};
