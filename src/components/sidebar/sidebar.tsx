import React from 'react';
import { Logo } from 'components/logo';
import './sidebar.scss';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__box">
        <Logo />
      </div>
    </aside>
  );
};
